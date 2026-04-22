function Stats({ intitule, text, sstext }) {
  return (
    <div className="bg-blue text-white rounded-2xl p-4 h-20">
      <p className="text-base text-light-blue">{intitule}</p>
      <p className="text-2xl">{text} <span className="text-base text-light-blue">{sstext}</span></p>
    </div>
  )
}

export default Stats