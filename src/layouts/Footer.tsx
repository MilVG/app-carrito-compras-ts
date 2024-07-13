import '../styles/footer_style.css'
export default function Footer() {
  function test(){
    const newelement =document.createElement('div');
    newelement.className = 'footer';
    document.body.appendChild(newelement);
  }
  return (
    <footer className="footer">
      <div >
        <ul>
          <li>element 1</li>
          <li>element 2</li>
          <li>element 3</li>
        </ul>
      </div>
      <div >
        <ul>
          <li>items 1</li>
          <li>items 2</li>
          <li>items 3</li>
          <li>items 4</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>option 1</li>
          <li>option 2</li>
          <li>option 3</li>
        </ul>
      </div>
    </footer>
  )
}
