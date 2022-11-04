import {Component} from 'react'
import ThumbnailImg from '../SubComp'
import Tab from '../Tabs'

import './index.css'

class MatchCard extends Component {
  componentWillUnmount() {
    const {timerID} = this.props
    clearInterval(timerID)
    console.log('componet removed')
  }

  render() {
    const {
      filterList,
      tabsList,
      imageObj,
      timerID,
      checkImage,
      changeTab,
    } = this.props
    console.log(timerID)

    return (
      <div className="match-card">
        <div>
          <img className="match-img" src={imageObj.imageUrl} alt="match" />
        </div>
        <ul className="tabs-cont">
          {tabsList.map(each => (
            <Tab key={each.id} data={each} changeTab={changeTab} />
          ))}
        </ul>
        <div className="thumbnails-cont">
          {filterList.map(each => (
            <ThumbnailImg checkImage={checkImage} key={each.id} data={each} />
          ))}
        </div>
      </div>
    )
  }
}

export default MatchCard
