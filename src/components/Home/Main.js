import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Header from '../Common/Header';
import Footer from '../Common/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div id='carouselFade' className='carousel slide carousel-fade' data-ride='carousel'>
          <ol className='carousel-indicators'>
            <li data-target='#carouselCaptions' data-slide-to='0' className='active' />
            <li data-target='#carouselCaptions' data-slide-to='1' />
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src='/images/background-1.jpg' className='d-block w-100' alt='Background 1' />
            </div>
            <div className='carousel-item'>
              <img src='/images/background-2.jpg' className='d-block w-100' alt='Background 2' />
              <div className='carousel-caption d-none d-md-block'>
                <h1>Characters</h1>
                <p>Meet the characters from the Avatar World!</p>
                <Link className='btn btn-light' to='/characters' role='button'>Show Characters</Link>
                <br /><br /><br />
              </div>
            </div>
          </div>
          <a className='carousel-control-prev' href='#carouselFade' role='button' data-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='sr-only'>Previous</span>
          </a>
          <a className='carousel-control-next' href='#carouselFade' role='button' data-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='sr-only'>Next</span>
          </a>
        </div>

        <div className='container'>
          <h1 className='text-center my-5'><Link to='/characters' className='links'>Aang's journey</Link></h1>
          <div className='mapa mx-auto mt-4'>
            <img src='./images/world_map.jpg' alt='Map' className='img-fluid rounded-lg' />
          </div>
          <div className='row mt-4'>
            <div className='col-md-4'>
              <h3 className='text-center mb-4'>Book One: Water</h3>
              <p>Places that were visited by Team Avatar during the winter of 99 AG</p>
              <p className='mb-2'><span className='water-point-to-nine'>1</span>Southern Water Tribe</p>
              <p className='mb-2'><span className='water-point-to-nine'>2</span>Patola Mountains</p>
              <p className='mb-2'><span className='water-point-to-nine'>3</span>Southern Air Temple</p>
              <p className='mb-2'><span className='water-point-to-nine'>4</span>Kyoshi Island</p>
              <p className='mb-2'><span className='water-point-to-nine'>5</span>Omashu</p>
              <p className='mb-2'><span className='water-point-to-nine'>6</span>Mining village</p>
              <p className='mb-2'><span className='water-point-to-nine'>7</span>Senlin Village</p>
              <p className='mb-2'><span className='water-point-to-nine'>8</span>Mo Ce Sea</p>
              <p className='mb-2'><span className='water-point-to-nine'>9</span>Crescent Island</p>
              <p className='mb-2'><span className='water-point'>10</span>Seedy merchants pier</p>
              <p className='mb-2'><span className='water-point'>11</span>Gaipan</p>
              <p className='mb-2'><span className='water-point'>12</span>Great Divide</p>
              <p className='mb-2'><span className='water-point'>13</span>Harbor town</p>
              <p className='mb-2'><span className='water-point'>14</span>Taku</p>
              <p className='mb-2'><span className='water-point'>15</span>Pohuai Stronghold</p>
              <p className='mb-2'><span className='water-point'>16</span>Makapu Village</p>
              <p className='mb-2'><span className='water-point'>17</span>Abbey</p>
              <p className='mb-2'><span className='water-point'>18</span>Fire Nation colonial village</p>
              <p className='mb-2'><span className='water-point'>19</span>Northern Air Temple</p>
              <p className='mb-4'><span className='water-point'>20</span>Northern Water Tribe</p>
            </div>
            <div className='col-md-4'>
              <h3 className='text-center mb-4'>Book Two: Earth</h3>
              <p>Places that were visited by Team Avatar during the spring of 100 AG</p>
              <p className='mb-2'><span className='earth-point'>21</span>General Fong's fortress</p>
              <p className='mb-2'><span className='earth-point'>22</span>Cave of Two Lovers</p>
              <p className='mb-2'><span className='earth-point'>23</span>Kolau Mountains</p>
              <p className='mb-2'><span className='earth-point'>24</span>Foggy Swamp</p>
              <p className='mb-2'><span className='earth-point'>25</span>Chin Village</p>
              <p className='mb-2'><span className='earth-point'>26</span>Gaoling</p>
              <p className='mb-2'><span className='earth-point'>27</span>Plains village</p>
              <p className='mb-2'><span className='earth-point'>28</span>Tu Zin</p>
              <p className='mb-2'><span className='earth-point'>29</span>Quarry campsite</p>
              <p className='mb-2'><span className='earth-point'>30</span>Si Wong Desert</p>
              <p className='mb-2'><span className='earth-point'>31</span>Library</p>
              <p className='mb-2'><span className='earth-point'>32</span>Full Moon Bay</p>
              <p className='mb-2'><span className='earth-point'>33</span>Serpent's Pass</p>
              <p className='mb-2'><span className='earth-point'>34</span>Outer wall of Ba Sing Se</p>
              <p className='mb-2'><span className='earth-point'>35</span>Ba Sing Se</p>
              <p className='mb-2'><span className='earth-point'>36</span>Earth Kingdom Royal Palace</p>
              <p className='mb-2'><span className='earth-point'>37</span>Agrarian Zone</p>
              <p className='mb-2'><span className='earth-point'>38</span>Lake Laogai</p>
              <p className='mb-2'><span className='earth-point'>39</span>Chameleon Bay</p>
              <p className='mb-4'><span className='earth-point'>40</span>Eastern Air Temple</p>
            </div>
            <div className='col-md-4'>
              <h3 className='text-center mb-4'>Book Three: Fire</h3>
              <p>Places that were visited by Team Avatar during the summer of 100 AG</p>
              <p className='mb-2'><span className='fire-point'>41</span>Fire Nation bazaar</p>
              <p className='mb-2'><span className='fire-point'>42</span>Jang Hui</p>
              <p className='mb-2'><span className='fire-point'>43</span>Shu Jing</p>
              <p className='mb-2'><span className='fire-point'>44</span>Roku's Island</p>
              <p className='mb-2'><span className='fire-point'>45</span>Fire Fountain City</p>
              <p className='mb-2'><span className='fire-point'>46</span>Hama's village</p>
              <p className='mb-2'><span className='fire-point'>47</span>Black Cliffs</p>
              <p className='mb-2'><span className='fire-point'>48</span>Great Gates of Azulon</p>
              <p className='mb-2'><span className='fire-point'>49</span>Fire Nation capital</p>
              <p className='mb-2'><span className='fire-point'>50</span>Fire Nation Royal Palace</p>
              <p className='mb-2'><span className='fire-point'>51</span>Western Air Temple</p>
              <p className='mb-2'><span className='fire-point'>52</span>Sun Warriors' ancient city</p>
              <p className='mb-2'><span className='fire-point'>53</span>Boiling Rock</p>
              <p className='mb-2'><span className='fire-point'>54</span>Yon Rha's village</p>
              <p className='mb-2'><span className='fire-point'>55</span>Ember Island</p>
              <p className='mb-4'><span className='fire-point'>56</span>Wulong Forest</p>
            </div>
          </div>
          <hr />

          <h1 className='text-center mt-4 mb-5'><Link to='/places' className='links'>Geography</Link></h1>
          <div className='row mb-5'>
            <div className='col-lg-6 col-md-12'>
              <p className='text-justify'>The world is divided into multiple landmasses, islands, and seas with a unique physical geography, landmarks, climates, and demography. For most of its history, the world was divided into a multitude of states and cultures which coalesced into four independent nations: Air Nomads, Water Tribe, Earth Kingdom, and Fire Nation.</p>
              <p className='text-justify'>The four nations were influenced by their corresponding element and accordingly shaped their environment. The Air Nomads had four temples located in the north, south, east, and west of the Earth. There are two main Water Tribes, situated north and south of the Earth Kingdom, the most expansive and populated state in the world. The Fire Nation is located in the west of the world and is an archipelago of volcanic islands. Each nation has a predominant season, and geography has a great influence on the customs and culture of each country.</p>
            </div>
            <div className='col-lg-5 col-md-6 m-auto'>
              <img src='/images/nations.jpg' alt='' className='img-fluid rounded-lg' />
            </div>
          </div>

          <div className='row mb-4'>
            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='card'>
                <img src='/images/nation_air.png' alt='Air Nomads' className='img-fluid rounded-top' />
                <div className='card-body'>
                  <h4 className='text-center'><Link to='/' className='links'>Air Nomads</Link></h4>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='card'>
                <img src='/images/nation_water.png' alt='Water Tribe' className='img-fluid rounded-top' />
                <div className='card-body'>
                  <h4 className='text-center'><Link to='/' className='links'>Water Tribe</Link></h4>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='card'>
                <img src='/images/nation_earth.png' alt='Earth Kingdom' className='img-fluid rounded-top' />
                <div className='card-body'>
                  <h4 className='text-center'><Link to='/' className='links'>Earth Kingdom</Link></h4>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <div className='card'>
                <img src='/images/nation_fire.png' alt='Fire Nation' className='img-fluid rounded-top' />
                <div className='card-body'>
                  <h4 className='text-center'><Link to='/' className='links'>Fire Nation</Link></h4>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <h1 className='text-center mt-4 mb-5'><Link to='/others' className='links'>Bendings</Link></h1>
          <div className='row mb-2'>
            <div className='col-lg-4 col-md-6 m-auto'>
              <img src='/images/aang.png' alt='' className='img-fluid rounded-lg' />
              <br /><br />
            </div>
            <div className='col-lg-8 col-md-12'>
              <p className='text-justify'>Bending is the ability to manipulate an element and is significant to many aspects of life in the world. There are five known bending arts, four of them bend a specific physical element while the fifth bends the energy within the human body itself. The only case of any one person being able to bend multiple elements is the Avatar, who has the ability to practice all five bending arts.</p>
              <p className='text-justify'>The four elemental bending arts are based on the four classical elements, water, earth, fire, and air, each being manipulated through certain martial art styles that are reminiscent of the qualities of the element itself. Bending is traditionally performed through the motions of one's hands and feet, but certain benders are able to effectively manipulate their element with only minimal movement of their body, such as by using just their head or torso. In even rarer cases, benders are able to perform their bending without the aid of any physical movement at all, by instead using sheer focus and force of will, a skill known as psychic bending. Each element is associated with a particular nation in the world, the Water Tribe corresponds with waterbending, the Earth Kingdom with earthbending, the Fire Nation with firebending, and the Air Nomads with airbending.</p>
            </div>
            <div className='col-lg-12'>
              <p className='text-justify'>The fifth bending art, energybending, is unlike the other four in that little physical action is required to direct the bending itself. The four elemental bending arts are all dependent on the energy, or chi, within the human body, relying on its flow through the body to manipulate a specific element. A person is able to bend when they extend the influence of their chi beyond the body to interact with the environment. Energybending, on the other hand, is concerned with the manipulation of the energy itself and is able to remove or grant bending abilities.</p>
            </div>
          </div>

          <div className='btn-group dropup'>
            <button type='button' className='btn btn-secondary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              Resources
            </button>
            <div className='dropdown-menu'>
              <a className='dropdown-item' href='https://wallpapercave.com/search?q=avatar' target='_blank' rel='noopener noreferrer'>Images</a>
              <a className='dropdown-item' href='https://avatar-app.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Info</a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
