const Scratch = () => {
    return (
        <div>
        <div>
        <label for='vision-impaired-yes'>Vision Impaired? yes</label>
        <input
          type='radio'
          value='yes'
          name='vision-impaired-yes'
          checked={visionImpaired === 'yes'}
          onChange={yesVisionImpaired}
        ></input>
      </div>
      <div>
        <label for='vision-impaired-no'>Vision Impaired? no</label>
        <input
          type='radio'
          value='no'
          name='vision-impaired-no'
          checked={visionImpaired === 'no'}
          onChange={noVisionImpaired}
        ></input>
      </div>
      </div>

    )
}
