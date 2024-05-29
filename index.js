const properties = {className: 'Head', children: 'Super Over League'}
const element = 'h1'

const totalOutput = (
  <div className='centerDiv'>
    <h1 className='Head'>Super Over League</h1>
    <div class='imgdiv'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='img'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='img2'
      />
    </div>
  </div>
)

ReactDOM.render(totalOutput, document.getElementById('root'))
