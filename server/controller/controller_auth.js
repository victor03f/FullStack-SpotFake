import bcryptjs from "bcryptjs"
import { User } from "../db.js";
import jsonwebtoken from "jsonwebtoken";

const registro = async (req, res) => {
    const { nome, sobrenome, email, senha, telefone } = req.body
    console.log(req.body)
    if (!nome || !sobrenome || !email || !senha || !telefone) {
        res.send('voce deve preencher todos itens')
    }
    const userExiste = await User.findOne({ where: { email: email } })
    if (userExiste) {
        res.send('usuario ja existe')
        return
    }


    const senhaCriptografada = bcryptjs.hashSync(senha, 10)



    const usuarioCriado = await User.create({ nome, sobrenome, email, senha: senhaCriptografada, telefone })

    res.send('ta funcioano')
}


const login = async (req, res) => {
    const { email, senha } = req.body;

    // Verificação de campos obrigatórios
    if (!email || !senha) {
        return res.status(400).send('Você deve preencher todos os campos');
    }

    // Verificar se o usuário existe
    const userExiste = await User.findOne({ where: { email } });
    if (!userExiste) {
        return res.status(404).send('Este usuário não existe');
    }

    // Verificar se a senha é válida
    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha);
    if (!senhaValida) {
        return res.status(401).send('Senha inválida');
    }

    // Gerar o token JWT
    const token = jsonwebtoken.sign(
        {
            nome_completo: `${userExiste.nome} ${userExiste.sobrenome}`,
            email: userExiste.email,
            status: userExiste.status,
        },
        "chavecriptografia", // Troque para uma chave secreta segura
        { expiresIn: '30d' } // 30 dias
    );

    // Resposta de sucesso
    res.status(200).send({
        msg: "Usuário logado com sucesso",
        tokenJWT: token,
    });
};

export {registro, login}