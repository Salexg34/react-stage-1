import "./style.css";

const ColumnContent = ({ statistics, isNonIndex }) => {
    return (
        <div className="column">
            {statistics?.map((item, index) => (
                <div className="column-content" key={index}>
                    {!isNonIndex && <span className="index">{index + 1}.</span>}
                    <span className="prefix">{item.prefix}</span>
                    <span className="value">{item.value}</span>
                    <span className="postfix">{item.postfix}</span>
                </div>
            ))}
        </div>
    )
}

export default ColumnContent;
