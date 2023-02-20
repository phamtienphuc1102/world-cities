import React, { useState } from 'react'
import { Button, Modal, Form , Tab, Tabs, Nav } from 'react-bootstrap'
import './GuidePanel.css'

const MapGuide = () => {
  return (
    <div className='map-guide-container'>
      The Global Urban Transformation This map visualises the radical transformation that has occurred across the globe in the last 60 years, from a 30% urban world in
      1950, to a 54% urban world in 2015 and a predicted 68% urban world in 2050. In 1950 there were 740m people living in cities; there are now 4 billion, rising to
      a predicted 6.6b by 2050. The circles on the map are proportional to city populations in 1950, 1990, 2015 and 2035. Move your mouse over cities to explore their
      detailed dynamics. Data is from the UN World Urban Propospects 2018. The technique of overlaying proportional circles to show population change over time was first
      developed in a static map at LSE Cities Urban Age by Guido Robazza. Industrialisation and urban growth in the 19th and early 20th centuries were powered by Western
      Europe and the North-Eastern USA, but the urban population of these regions has been relatively static since 1950. Recent growth is instead the result of rapid
      urbanisation in China, India, Latin America and increasingly Africa. Over half of the world's urban population is now is Asia, with China alone comprising 20%
      of the global total. Asia and Africa will together account for 90% of the additional 2.3b urban dwellers predicted between 2015 and 2050. The pace of recent change
      at the city level is unprecedented in human history. Shanghai (click on the city link to focus the map) gained 16 million people between 1990 and 2015, Beijing
      13.6 million, Dhaka 11 million. Delhi gained 16 million residents between 1990-2015 and is now the world’s second largest city of 26m. Delhi is predicted to overtake
      Tokyo to become the world's largest city by 2030, with a predicted 43m residents by 2035. Small towns like Shenzhen, Xiamen and Dubai have become cities of several
      million in little over two decades. While the proportion of urban residents living in large cities is increasing, it is important to realise that 50% of the global
      urban population live in settlements of less than 0.5m. The minimum population threshold for cities included in this map is 0.4m. Our increasingly urban world
      now frames many of society’s greatest challenges. From global equality to health, education, prosperity and, not least, sustainability, solutions need to be interwoven
      with fostering liveable, efficient and inclusive cities. Waves of Growth We can see distinct waves of urban growth and stagnation over time. In the 1960s and 1970s,
      economic growth in Japan, Mexico, Brazil and later South Korea produced rapid urban growth. This growth peaked in 1990 in Japan, in 2000 in South Korea, and city
      populations are now peaking in Latin America. This is the typical urbanisation cycle of population stabilisation following development. China and India’s rapid
      growth has been much more recent, accelerating in the 1990s and 2000s. China’s growth is predicted to slow over the next two decades, with its total population
      peaking around 2025, although it's rate of urbanisation will continue to rise towards 70% in 2030. India’s population growth will continue much longer to around
      2060. There remains a huge rural Indian population of 800 million people, a significant proportion of which will urbanise in coming decades. Meanwhile many sub-Saharan
      African countries are just beginning their rapid urban expansion. Lagos is set to gain 12 million residents between 2015 and 2035, Kinshasa 15 million, Dar es
      Salaam 8 million, Luanda 7.5 million. Urbanisation in Africa will ideally bring the scale of poverty reduction achieved in countries like China, though clearly
      there are many challenges and huge diversity across the region. Find Out More Analysis page- Query the city data and select cities according to their population
      and growth during different time periods. UN World Urbanisation Prospects- The dataset used to make this visualisation, with detailed reporting on the future of
      the world's cities. Mapping tools used- more information on how this visualisation was created
    </div>
  )
}

const Analysis = () => {
  return (
    <div id="analysiscontent" style={{}}>
      Choose a data query to select city groups:
      <Form.Select aria-label="Default select example">
        <option value="Q1">Largest Cities 1950</option>
        <option value="Q2">Largest Cities 1990</option>
        <option value="Q3" selected="selected">Largest Cities 2015</option>
        <option value="Q4">Largest Cities 2035</option>
        <option value="Q5">Highest Absolute Growth 1950-1990</option>
        <option value="Q6">Highest Absolute Growth 1990-2015</option>
        <option value="Q7">Highest Absolute Growth 2015-2035</option>
        <option value="Q8">Lowest Absolute Growth 1950-1990</option>
        <option value="Q9">Lowest Absolute Growth 1990-2015</option>
        <option value="Q10">Lowest Absolute Growth 2015-2035</option>
        <option value="Q11">Global and National Pop. Totals</option>
      </Form.Select>
      <table id="querytable">
        <tr class="header"><td>Rank</td><td>City Name</td><td>Population 2015</td></tr>
        <tr><td>1</td><td>Tokyo</td><td>37.3 million</td></tr>
        <tr><td>2</td><td>Delhi</td><td>25.9 million</td></tr>
        <tr><td>3</td><td>Shanghai</td><td>23.5 million</td></tr>
        <tr><td>4</td><td>Mexico City</td><td>21.3 million</td></tr>
        <tr><td>5</td><td>Sao Paulo</td><td>20.9 million</td></tr>
        <tr><td>6</td><td>Mumbai</td><td>19.3 million</td></tr>
        <tr><td>7</td><td>Osaka</td><td>19.3 million</td></tr>
        <tr><td>8</td><td>Cairo</td><td>18.8 million</td></tr>
        <tr><td>9</td><td>New York</td><td>18.6 million</td></tr>
        <tr><td>10</td><td>Beijing</td><td>18.4 million</td></tr>
        <tr><td>11</td><td>Dhaka</td><td>17.6 million</td></tr>
        <tr><td>12</td><td>Buenos Aires</td><td>14.3 million</td></tr>
      </table>
    </div>
    
  )
}

const GuidePanel = (props) => {
  const isHidden = props.isHidden
  const tabActive = props.tabActive

  return (
    <div className={isHidden ? 'tab-container' : 'tab-container hidden'}>
      <Tabs defaultActiveKey={tabActive === 0 ? 'map-guide' : 'analysis'} id='uncontrolled-tab-example' className='mb-3'>
        <Tab eventKey='map-guide' title='Map Guide'>
          <MapGuide />
        </Tab>
        <Tab eventKey='analysis' title='Analysis'>
          <Analysis />
        </Tab>
      </Tabs>
    </div>

  )
}

export default GuidePanel
