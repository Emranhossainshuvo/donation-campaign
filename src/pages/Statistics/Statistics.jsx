import { useLoaderData } from 'react-router-dom';
import React from 'react';
import Chart from 'react-apexcharts'

// import { TotalDataContext } from '../../components/Carts/Carts';




const Statistics = () => {
    const totalData = useLoaderData(); 

    const localData = localStorage.getItem('donation-data'); 
    const localStoredData = JSON.parse(localData);

    const donatedData = localStoredData.length; 
    const data = totalData.length; 

    const donatedParcentage = (donatedData / data) * 100; 

    const homeParcentage = 100 - donatedParcentage

    console.log(data)
    return (
        <div>
            <React.Fragment>
                <div className='flex justify-center items-center mt-20'>
                    <Chart
                    type='pie'
                    width={1300}
                    height={550}

                    series={[donatedParcentage, homeParcentage]}

                    options={{
                        colors: ['#FF444A', '#00C49F'],

                        labels: ["Your donation", "Total donation"]
                    }}  

                    >

                    </Chart>
                </div>
            </React.Fragment>
        </div>
    
    );
    
};

export default Statistics;