const express = require('express')
const app = express()
const port = 8000


app.get('/', (req, res) => {
    res.send({
        id: 1,
        name: 'Иванов Иван',
        position: 'Старший бухгалтер',
        department: 'Отдел бухгалтерской отчетности',
        office_phone_number: '+71112223344, 5556666',
        personal_phone_number: '',
        address: 'г. Москва, ул. Пушкина, д. Колотушкина'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
