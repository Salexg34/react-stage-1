import "./style.css";
import Badge from "../badge"

const Legend = ({ exercise, statistics }) => {
    const badgeValue = statistics ? statistics.length : 0;

    return (
        <div className="legend">
            <Badge position="top-right" badgeValue={badgeValue} />
            <span className="exercise">{exercise}</span>
        </div>
    );
};

export default Legend;