import './index.css'

const BannerCardItem = props => {
  const {listItem} = props
  const {className, headerText, description} = listItem
  const classContainer = `eachCardStyle ${className}`
  return (
    <li className={classContainer}>
      <div>
        <h1 className="headStyling">{headerText}</h1>
        <p className="paraStyling">{description}</p>
        <button className="buttonStyling" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
