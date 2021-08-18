import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

function WithPretty(Component) {
    return function(props) {
        const date = moment(props.date, 'YYYYMMDDhhmm').fromNow();

        return <Component {...props} date={date} />
    }
}

WithPretty.propTypes = {
    date: PropTypes.string
}

export default WithPretty