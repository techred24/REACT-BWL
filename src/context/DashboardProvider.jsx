import React, { useReducer, useState } from 'react'
import { dashboardReducer } from '../reducer/dashboardReducer';
import { DashboardContext } from './DashboardContext';

export const DashboardProvider = ({ children }) => {
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

      const dashboardState = {
        weatherInfo,
        selectedCountry,
        time,
        timeZones
      }
      
    let [dashboardInfo, dispatch] = useReducer(dashboardReducer, dashboardState);
    return (
        <DashboardContext.Provider value={{ dashboardInfo, dispatch }}>
            { children }
        </DashboardContext.Provider>
    )
}