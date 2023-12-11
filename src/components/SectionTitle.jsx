import PropTypes from 'prop-types'

const SectionTitle = ({heading}) => {
  return (
    <div>
      <div className="flex justify-center items-center">
                <p className="text-left text-3xl font-bold">{heading}</p>
              </div>
    </div>
  );
}

SectionTitle.propTypes = {
    heading: PropTypes.string
}

export default SectionTitle;
