import Card from './card';

export default function Home() {
  return (
    <>
      <main className="h-screen grid grid-cols-1 place-content-center">
        <Card />
      </main>
      {/* <footer className="flex-none">
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by Grecco Oliva, Franco <a href="#">(Github)</a>.
        </div>
      </footer> */}
    </>
  );
}