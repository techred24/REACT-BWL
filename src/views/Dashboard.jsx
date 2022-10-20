import React, { Fragment, useState } from 'react'
import { Nav } from '../components/Nav'
import mexicanfla from '../assets/mexico.jpg'
import moment from 'moment-timezone'
import { sendGet } from '../helpers/fetchFunctions'
import { useContext } from 'react'
import { DashboardContext } from '../context/DashboardContext'
export const Dashboard = () => {
  let { dashboardInfo, dispatch } = useContext(DashboardContext);

  const [weatherInfo, setWeatherInfo] = useState({
    imageWeather: '',
    description: '',
    temperature: ''
  });
  const [selectedCountry, setSelectedCountry] = useState({
    name: '',
    flag: ''
  })
  const [time, setTime] = useState('')
  const [timeZones, setTimeZones] = useState([]);

  let timeZone = ''
  let { imageWeather, description, temperature } = weatherInfo;
  let changeHour = () => {
    setTime(moment.tz(timeZone).format('h:mm:ss a'))
  }
  const onSelectZone = (zone) => {
    timeZone = zone
    clearInterval(changeHour)
    setInterval(changeHour, 1000)
  }

  const selectCountry = async (countryName) => {
    console.log(dashboardInfo, 'CONTEXT')
    dispatch({
      type: 'country',
      payload: 'Mexico'
    })
    console.log(dashboardInfo, 'CONTEXT 2')
    if (dashboardInfo) return
    // key 7951eb73ad204dec98995136222002
    console.log(countryName, 'NAME')
    if (countryName === 'México') {
      const data = await sendGet(`http://api.weatherapi.com/v1/current.json?key=7951eb73ad204dec98995136222002&q=México&aqi=no&lang=es`);
      console.log(data)
      setWeatherInfo({
        ...weatherInfo,
        imageWeather: data.current.condition.icon,
        description: data.current.condition.text,
        temperature: data.current.feelslike_c
      })
      setTimeZones(moment.tz.zonesForCountry('MX'))
      setSelectedCountry({
        ...selectedCountry,
        name: 'México'
      })
    }
    if (countryName === 'Estados Unidos') {
      const data = await sendGet(`http://api.weatherapi.com/v1/current.json?key=7951eb73ad204dec98995136222002&q=United-States&aqi=no&lang=es`);
      setWeatherInfo({
        ...weatherInfo,
        imageWeather: data.current.condition.icon,
        description: data.current.condition.text,
        temperature: data.current.feelslike_c
      })
      setTimeZones(moment.tz.zonesForCountry('US'))
      setSelectedCountry({
        ...selectedCountry,
        name: 'Estados Unidos'
      })
    }
    if (countryName === 'Chile') {
      const data = await sendGet(`http://api.weatherapi.com/v1/current.json?key=7951eb73ad204dec98995136222002&q=Chile&aqi=no&lang=es`);
      setWeatherInfo({
        ...weatherInfo,
        imageWeather: data.current.condition.icon,
        description: data.current.condition.text,
        temperature: data.current.feelslike_c
      })
      setTimeZones(moment.tz.zonesForCountry('CL'))
      setSelectedCountry({
        ...selectedCountry,
        name: 'Chile'
      })
    }
    // console.log(moment.tz.names(), 'NAMES')
  }
  const countriesToShow = ['México', 'Estados Unidos', 'Chile'];
  return (
    <>
      <Nav/>
      <div>
        <main className='grid__cards'>
            <div className='cards'>
                <div className='card'>
                    <h2 className='card__title'>Clima</h2>
                    <div className='card__content'>
                      <div className="content weather">
                        {
                          description.length > 0 && 
                          (
                            <>
                              <img className='weather__image' src={imageWeather} alt="weather image" />
                              <div className='weather__info'>
                                <p className='weather__temperature'>{ temperature } C</p>
                                <p className='weather__description'>{ description }</p>
                              </div>
                            </>
                          )
                        }
                      </div>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='card__title'>País Seleccionado</h2>
                    <div className='card__content'>
                      <div className="content selected__country">
                          {
                            selectedCountry.name.length > 0 && 
                            (
                              <>
                                <img className='selected__country__image' src={mexicanfla} alt='flag' />
                                <p className='selected__country__name'>{ selectedCountry.name }</p>
                              </>
                            )
                          }
                      </div>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='card__title'>Tareas Pendientes</h2>
                    <div className='card__content'>
                      <div className="content">
                        <button>Ir al banco</button>
                        <button>Revisar balance general</button>
                        <button>Ajustar metricas de diseño</button>
                        <button>Ajustar metricas de diseño</button>
                        <button>Ajustar metricas de diseño</button>
                        <button>Ajustar metricas de diseño</button>
                        <button>Ajustar metricas de diseño</button>
                        <button>Ajustar metricas de diseño</button>
                        <button>Ajustar metricas de diseño</button>
                      </div>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='card__title'>Hora</h2>
                    <div className='card__content card__content__time'>
                      <div className="content content__time">
                          <p className='time'>{ time.length > 0  && time }</p>
                      </div>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='card__title'>Tareas Completadas</h2>
                    <div className='card__content'>
                      <div className="content">

                      </div>
                    </div>
                </div>
                <div className='card'>
                    <h2 className='card__title'>Zonas Horarias Disponibles</h2>
                    <div className='card__content'>
                      <div className="content">
                        {
                          timeZones.length > 0 && timeZones.map((zone) => <button onClick={() => onSelectZone(zone)} key={zone}>{zone}</button>)
                        }
                      </div>
                    </div>
                </div>
            </div>



            <aside className='countries__card'>
                <h2 className='card__title'>Países Disponibles</h2>

                <div className='countries__section'>
                    <div className="countries__wrapper">
                        {
                          countriesToShow.map((country, i) => {
                            const key = country.split(' ').join('-') + i;
                            return  <button className='country' onClick={() => selectCountry(country)} key={key}>
                                        <img src={mexicanfla} alt="flag" />
                                        <p className='country__name'>{country}</p>
                                    </button>
                          })
                        }
                    </div>
                </div>
            </aside>
        </main>
      </div>
    </>
  )
}
