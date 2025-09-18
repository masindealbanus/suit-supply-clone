export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Suit Supply Clone</h1>
      <div>
        <h2>Products</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <div>
            <img src="/navy-suit.jpg" alt="Navy Suit" width="200" />
            <p>Navy Suit</p>
          </div>
          <div>
            <img src="/grey-suit.jpg" alt="Grey Suit" width="200" />
            <p>Grey Suit</p>
          </div>
          <div>
            <img src="/shirt.jpg" alt="Shirt" width="200" />
            <p>Shirt</p>
          </div>
          <div>
            <img src="/shoes.jpg" alt="Shoes" width="200" />
            <p>Shoes</p>
          </div>
        </div>
      </div>
    </main>
  );
}