let axios = require("axios")






let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}






let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





let get_By_district_and_date = async function (req, res) {

    try {
        let district_id = req.query.district_id
        let date = req.query.date
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)

        res.status(200).send({ msg: result.data })
    } catch {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





let getweatherOfLondon = async function (req, res) {
    try {
        let city = req.query.city
        let appid = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let weather = await axios(options)
        let result = weather.data.main.temp


        res.status(200).send({ temp: result })
    } catch {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




let get_all_cityWeather_With_temp = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let temp = []

        for (let ind = 0; ind < cities.length; ind++) {

            let city = cities[ind]
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9705fe5f7da0e0c2f5993f30bfd64e78`
            }
            let result = await axios(options)
            temp.push(result.data.main.temp)

        }

        var list = [];
        for (let j = 0; j < cities.length; j++) {
            list.push({ 'city': cities[j], 'temp': temp[j] });
        }

        list.sort(function (a, b) {
            return ((a.temp < b.temp) ? -1 : ((a.temp == b.temp) ? 0 : 1));
        })



        res.status(200).send({ msg: list })


    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: err.message })
    }
}






let creatmemes = async function (req, res) {

try{
    let template_id = req.query.template_id
    let username = req.query.username
    let password = req.query.password
    let text0 = req.query.text0
    let text1 = req.query.text1

  let options = {
    method: 'get',
    url : `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
  }


    let result = await axios(options)

    res.status(200).send({ msg: result.data })

}
catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: err.message })
}

}




module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.get_By_district_and_date = get_By_district_and_date
module.exports.getweatherOfLondon = getweatherOfLondon
module.exports.get_all_cityWeather_With_temp = get_all_cityWeather_With_temp
module.exports.creatmemes = creatmemes