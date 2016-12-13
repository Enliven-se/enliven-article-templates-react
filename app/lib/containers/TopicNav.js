import React from 'react'

class TopicNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
          <ul id="topics-menu" className="menu nav navbar-nav">
              <li className="first expanded dropdown menu-link-womens-lifestyle-v"><a href="/en/topics/womens-lifestyle" title="Women&#039;s Lifestyle" className="dropdown-toggle" data-toggle="dropdown" data-target="#">Women's Lifestyle <span className="caret-down">v</span></a>
                  <ul className="dropdown-menu"><li className="first collapsed menu-link-features"><a href="/en/topics/womens-lifestyle/features" title="Features">Features</a></li>
                      <li className="collapsed menu-link-fashion"><a href="/en/topics/womens-lifestyle/fashion" title="Fashion">Fashion</a></li>
                      <li className="collapsed menu-link-womens-health"><a href="/en/topics/womens-lifestyle/womens-health" title="Women&#039;s Health">Women&#039;s Health</a></li>
                      <li className="collapsed menu-link-beauty"><a href="/en/topics/womens-lifestyle/beauty" title="Beauty">Beauty</a></li>
                      <li className="collapsed menu-link-life--love"><a href="/en/topics/womens-lifestyle/life-love" title="Life &amp; Love">Life &amp; Love</a></li>
                      <li className="last collapsed menu-link-accessories"><a href="/en/topics/womens-lifestyle/accessories" title="Accessories">Accessories</a></li>
                  </ul>
              </li>
              <li className="expanded dropdown menu-link-mens-lifestyle-v"><a href="/en/topics/mens-lifestyle" title="Men&#039;s Lifestyle" className="dropdown-toggle" data-toggle="dropdown" data-target="#">Men's Lifestyle <span className="caret-down">v</span></a>
                  <ul className="dropdown-menu"><li className="first collapsed menu-link-features"><a href="/en/topics/mens-lifestyle/features" title="Features">Features</a></li>
                      <li className="collapsed menu-link-style"><a href="/en/topics/mens-lifestyle/style" title="Style">Style</a></li>
                      <li className="collapsed menu-link-health--fitness"><a href="/en/topics/mens-lifestyle/health-fitness" title="Health &amp; Fitness">Health &amp; Fitness</a></li>
                      <li className="collapsed menu-link-grooming"><a href="/en/topics/mens-lifestyle/grooming" title="Grooming">Grooming</a></li>
                      <li className="last collapsed menu-link-accessories"><a href="/en/topics/mens-lifestyle/accessories" title="Accessories">Accessories</a></li>
                  </ul>
              </li>
              <li className="expanded dropdown menu-link-outdoor--health-v"><a href="/en/topics/outdoor-health" title="Outdoor &amp; Health" className="dropdown-toggle" data-toggle="dropdown" data-target="#">Outdoor & Health <span className="caret-down">v</span></a>
                  <ul className="dropdown-menu"><li className="first collapsed menu-link-outdoor"><a href="/en/topics/outdoor-health/outdoor" title="Outdoor">Outdoor</a></li>
                      <li className="collapsed menu-link-health--fitness"><a href="/en/topics/outdoor-health/health-fitness" title="Health &amp; Fitness">Health &amp; Fitness</a></li>
                      <li className="collapsed menu-link-boat-life"><a href="/en/topics/outdoor-health/boat-life" title="Boat Life">Boat Life</a></li>
                      <li className="collapsed menu-link-equestrian-sports"><a href="/en/topics/outdoor-health/equestrian-sports" title="Equestrian Sports">Equestrian Sports</a></li>
                      <li className="last collapsed menu-link-golf"><a href="/en/topics/outdoor-health/golf" title="Golf">Golf</a></li>
                  </ul>
              </li>
              <li className="expanded dropdown menu-link-home--garden-v"><a href="/en/topics/home-garden" title="Home &amp; Garden" className="dropdown-toggle" data-toggle="dropdown" data-target="#">Home & Garden <span className="caret-down">v</span></a>
                  <ul className="dropdown-menu"><li className="first collapsed menu-link-interior-design"><a href="/en/topics/home-garden/interior-design" title="Interior Design">Interior Design</a></li>
                      <li className="collapsed menu-link-house--garden"><a href="/en/topics/home-garden/house-garden" title="House &amp; Garden">House &amp; Garden</a></li>
                      <li className="collapsed menu-link-food--wine"><a href="/en/topics/home-garden/food-wine" title="Food &amp; Wine">Food &amp; Wine</a></li>
                      <li className="last collapsed menu-link-animal--pet"><a href="/en/topics/home-garden/animal-pet" title="Animal &amp; Pet">Animal &amp; Pet</a></li>
                  </ul>
              </li>
              <li className="expanded dropdown menu-link-the-arts-v"><a href="/en/topics/arts" title="The Arts" className="dropdown-toggle" data-toggle="dropdown" data-target="#">The Arts <span className="caret-down">v</span></a>
                  <ul className="dropdown-menu"><li className="first collapsed menu-link-literature"><a href="/en/topics/arts/literature" title="Literature">Literature</a></li>
                      <li className="collapsed menu-link-movies--tv"><a href="/en/topics/arts/movies-tv" title="Movies &amp; TV">Movies &amp; TV</a></li>
                      <li className="collapsed menu-link-music"><a href="/en/topics/arts/music" title="Music">Music</a></li>
                      <li className="collapsed menu-link-performing-arts"><a href="/en/topics/arts/performing-arts" title="Performing Arts">Performing Arts</a></li>
                      <li className="last collapsed menu-link-photography--arts"><a href="/en/topics/arts/photography-arts" title="Photography &amp; Arts">Photography &amp; Arts</a></li>
                  </ul>
              </li>
              <li className="last expanded dropdown menu-link-travel--science-v"><a href="/en/topics/travel-science" title="Travel &amp; Science" className="dropdown-toggle" data-toggle="dropdown" data-target="#">Travel & Science <span className="caret-down">v</span></a>
                  <ul className="dropdown-menu"><li className="first collapsed menu-link-automotive"><a href="/en/topics/travel-science/automotive" title="Automotive">Automotive</a></li>
                      <li className="collapsed menu-link-travel"><a href="/en/topics/travel-science/travel" title="Travel">Travel</a></li>
                      <li className="collapsed menu-link-science--technology"><a href="/en/topics/travel-science/science-technology" title="Science &amp; Technology">Science &amp; Technology</a></li>
                      <li className="collapsed menu-link-stuff-gaming--gear"><a href="/en/topics/travel-science/stuff-gaming-gear" title="Stuff, Gaming &amp; Gear">Stuff, Gaming &amp; Gear</a></li>
                      <li className="last collapsed menu-link-history--nature"><a href="/en/topics/travel-science/history-nature" title="History &amp; Nature">History &amp; Nature</a></li>
                  </ul>
              </li>
          </ul>
      </nav>
    )
  }

}

export default TopicNav
