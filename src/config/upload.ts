import path from 'path'
import crypto from 'crypto'
import multer from 'multer'

export default {
  storage: multer.diskStorage({
    // 1º DEFINA LOCAL PARA ARMAZENAR
    destination: path.resolve(__dirname, '..', '..', 'tmp'),

    filename(req, file, callback) {
      //2º CRIE UM HASH PARA ADICIONAR AO INICIO DO NOME DAS IMAGENS
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName)
    }
  })
}
