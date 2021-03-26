

export default (props) => {
  const {
    backgroundColor,
    overlayColor,
    overlayOpacity,
    innerText=props.children,
    width, 
		breakpoint=800,
    textAlign,
    horizontalPosition,
    verticalPosition,
    textAlignMobile,
    horizontalPositionMobile,
    verticalPositionMobile,
  } = {...props.defaultValues, ...props}

	const alignmentClasses = [
		`text_${textAlign}`, 
		`justify_${horizontalPosition}`, 
		`align_${verticalPosition}`
	]

	const alignmentClassesMobile = [
		`text_${textAlignMobile || textAlign}_mob`, 
		`justify_${horizontalPositionMobile || horizontalPosition}_mob`, 
		`align_${verticalPosition || verticalPosition}_mob`
	]

	const colorOverlayStyles = {
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  }

  return (
    <div className="basic_content"> 
      <div className="basic_content__color-overlay" style={colorOverlayStyles} />
      <div 
        className="basic_content__inner h100-percent w100-percent"
      >
        <div 
          className="basic_content__inner--text-align"
        >
          {innerText}
        </div>
      </div>
    </div>
  )
}