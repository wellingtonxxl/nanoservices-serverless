const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')
uuidv4();

AWS.config.update({
    region: 'us-east-1'
})

const S3 = new AWS.S3()
const BUCKET = 'kakashi-images'

const upload = body => {
    const id = uuidv4()
    return new Promise((res, rej) => {
        S3.putObject({
            Bucket: BUCKET,
            Key: id + '.jpg',
            Body: new Buffer.from(body.replace(/^data:image\/\w+;base64,/, ""),'base64'),
            ContentType: 'image/jpeg',
            ContentEncoding: 'base64'
        }, (err) => {
            if (err){
                return rej(err)
            }
            return res({
                bucket: BUCKET,
                key: id + '.jpg'
            })
        })
    })
}

module.exports = {
    upload: upload
}