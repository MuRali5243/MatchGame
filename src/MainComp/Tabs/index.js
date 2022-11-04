import './index.css'

const Tabs = props => {
  const {data, changeTab} = props
  const {tabId, displayText} = data
  const changeTabId = () => {
    changeTab(tabId)
  }
  return (
    <li>
      <button className="tab-btn" onClick={changeTabId}>
        {displayText}
      </button>
    </li>
  )
}
export default Tabs
