const Tag = ({tagLabel, tagBgColor, tagTextColor, tagFontSize}) => {
    return(
        <span className={`inline-block rounded-full px-3 py-1 font-semibold mr-2 mb-2 ${tagBgColor} ${tagTextColor} ${tagFontSize}`}>{tagLabel}</span>
    )
}
export default Tag
