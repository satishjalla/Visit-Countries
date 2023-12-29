import './index.css'

const VisitedCountries = props => {
  const {VisitedCountryDetails, deleteVisitCountry} = props
  const {name, imageUrl, id} = VisitedCountryDetails

  const remove = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="visited-countries-list-item">
      <div className="visited-countries-container">
        <img className="country-image" src={imageUrl} alt="thumbnail" />
        <div className="details-section">
          <p className="visited-country-title">{name}</p>
          <button
            className="delete-button"
            type="button"
            onClick={remove}
            data-testid="delete"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
