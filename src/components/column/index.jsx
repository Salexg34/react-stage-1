import Legend from "../legend";
import ColumnContent from "../column-content";
import "./style.css";
const Column = ({ exercise, statistics, isNonIndex }) => {
    return (
        <div className="column-day">

            <Legend exercise={exercise} statistics={statistics} />
            <ColumnContent statistics={statistics} isNonIndex={isNonIndex} />
        </div>
    );
}

export default Column;