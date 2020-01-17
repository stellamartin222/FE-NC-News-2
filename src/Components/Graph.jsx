import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {articlesCounter} from '../Utils/utilFunctions'

export default function Graph({articles}){
    const articlesData = articles

    const data = {
        labels: [
            'Coding',
            'Football',
            'Cooking'
        ],
        datasets: [{
            data: articlesCounter(articlesData),
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };

    return (
      <div>
        <Doughnut data={data} className="graphBox"/>
      </div>
    );
};