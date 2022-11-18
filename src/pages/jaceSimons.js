export default function jacePage() {''
    return (
      <div className='container'>
        <title>Jace Simons' About Me</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hello, I'm Jace Simons</h1>
          </div>

            <p className='description'>
              My name is Jace Simons. I am a freshman majoring in computer science here at CU Boulder
              I have been in computer science since 5th grade, when my school did the hour of code.
              I took 3 programming classes in middle school, and 2 AP Comp sci classes in high school.
              I have had 3 internships, 2 of which are directly computer science (the first one was in robotics).
              My current one is at a Software company in Boulder called Yes Energy, where we develop a suite of
              products for energy traders, people who buy and sell prospects for electricity moving through the grid.
          </p>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
        }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

        .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
        }

        .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
            color: #0070f3;
            border-color: #0070f3;
        }

        .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
        }

        .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
        }

        a {
            outline: none;
            text-decoration: none;
            padding: 2px 1px 0
        }

        a:link {
            color: #000000
        }

        a:visited {
            color: #ffffff;
        }

        
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}