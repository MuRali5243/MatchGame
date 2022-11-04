import './index.css'

const Thumbnail = props => {
  const {data, checkImage} = props
  const {thumbnailUrl, id} = data
  const checkImg = () => {
    checkImage(id)
  }
  return (
    <li className="thumbnail-item" onClick={checkImg}>
      <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
    </li>
  )
}
export default Thumbnail
