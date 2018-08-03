var React = require('react');
var PropTypes = require('prop-types');

function SelectedLanguage(props) {
    var languages = ['All', 'JavaScript', 'CSS', 'HTML', 'C#', 'Dart', 'F#'];

    return (
        <ul className='languages'>
                {languages.map(function (lang) {
                    return (
                        <li
                            style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
                            onClick={props.onSelect.bind(null, lang)}
                            key={lang}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
    )
}

SelectedLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {

        return (
            <div>
                <SelectedLanguage 
                    selectedLanguage = {this.state.selectedLanguage}
                    onSelect = {this.updateLanguage}
                />
            </div>
        )

    }
}

module.exports = Popular;