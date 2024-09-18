import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <section id="header">
    <div className="container">
      <div id="header-title">
        <h1>Alina Suchanski</h1>
      </div>
      <div id="header-nav">
        <ul>
          <li className="about"><a href="#about"
              target="_self">About</a></li>
          <li>|</li>
          <li className="books"><a href="#books"
              target="_self">Books</a></li>
          <li>|</li>
          <li className="film"><a href="#film"
              target="_self">Film</a></li>
        </ul>
      </div>
    </div>
    <div className="border shadow"></div>
  </section>

  <a name="about"></a>
  <section id="hero">
    <div className="container">
      <div id="portrait">
        <img className="shadow" src="/images/alina_suchanski_portrait.jpg" alt="Alina Suchanski" />
      </div>
      <div id="bio">
        <p className="large"><em>Alina Suchanski</em> grew up in Poland and came to New Zealand in 1982 settling in
          Christchurch, where she completed her BSc degree in Computer Science and later an MBA at the University of
          Canterbury. Following that she worked as a project manager in computer industry for a number of years.</p>
        <p className="large">Her latest book Alone, an inspiring story of survival and determination, based on the life of
          her stepfather, Antoni Leparowski, continues the theme of the history of Polish settlers in New Zealand.</p>
      </div>
      <div id="timeline">
        <div className="timeline-item">
          <div className="year">
            <h2>2004</h2>
          </div>
          <div className="description">
            <p>Managed the production of the documentary Poles Apart which was subsequently shown in New Zealand,
              Australia, Canada and Poland.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year">
            <h2>2005</h2>
          </div>
          <div className="description">
            <p>Organised an exhibition titled “Polish Kiwis” at The Canterbury Museum in Christchurch and a year later
              published a book Polish Kiwis, Pictures from an Exhibition.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="year">
            <h2>2007</h2>
          </div>
          <div className="description">
            <p>Moved to Te Anau, Fiordland, where she works as a journalist for a local newspaper.</p>
          </div>
        </div>
        <div id="timeline-image"></div>
      </div>
    </div>
    <div className="border shadow"></div>
  </section>

  <section id="slider">
    <div id="product-slider" className="container">
      <div className="product" id="polish-kiwis-slider">
        <div className="product-image"></div>
        <div className="prodict-desc">
          <h3>Polish Kiwis, <br />Pictures from <br />an Exhibition</h3>
          {/*<h4>Hardcover</h4>*/}
          <div className="price">
            <h2><sup>$</sup>25.00</h2>
            <p>plus postage <br />and handling.</p>
            <div className="clear"></div>
          </div>
          <div className="buttons">
            <a className="btn"
              href="mailto:alina.suchanski@gmail.com">Enquire</a>
            {/*<a className="btn btn-secondary" href="#">Read More</a>*/}
          </div>
        </div>
      </div>

      <div className="product" id="alone-slider">
        <div className="product-image"></div>
        <div className="prodict-desc">
          <h3>Alone, An Inspiring <br />Story of Survival and <br />Determination</h3>
          <h4>Paperback</h4>
          <div className="price">
            <h2><sup>$</sup>25.00</h2>
            <p>plus postage <br />and handling.</p>
            <div className="clear"></div>
          </div>
          <div className="buttons">
            <a className="btn"
              href="mailto:alina.suchanski@gmail.com">Enquire</a>
            {/*<a className="btn btn-secondary" href="#">Read More</a>*/}
          </div>
        </div>
      </div>

      <div className="product" id="poles-apart-slider">
        <div className="product-image"></div>
        <div className="prodict-desc">
          <h3>Poles Apart, <br />Pictures from <br />an Exhibition</h3>
          <h4>Hardcover</h4>
          <div className="price">
            <h2><sup>$</sup>25.00</h2>
            <p>plus postage <br />and handling.</p>
            <div className="clear"></div>
          </div>
          <div className="buttons">
            <a className="btn"
              href="mailto:alina.suchanski@gmail.com">Enquire</a>
            {/*<a className="btn btn-secondary" href="#">Read More</a>*/}
          </div>
        </div>
      </div>
    </div>
  </section>

  <a name="books"></a>
  <section id="descriptions">
    <div className=" container">
      <div className="hr"></div>

      <div className="long-description" id="alone" name="alone">
        <div className="title">
          <h2>Alone, <span className="sml">An Inspiring Story of Survival and Determination</span></h2>
        </div>
        <div className="left-col">
          <p>Tony Leparowski was born and spent his early childhood in eastern Poland which now belongs to Ukraine. He
            was 3 years old when World War II started. His father joined the Polish Army, but was soon taken prisoner by
            the Russians, put in a POW camp and executed in April 1940 along with 25,000 other Polish officers.</p>
          <p>Soon after that his mother and three brothers were deported by the Soviets to Kazakhstan, where they spent
            2 years. His mother died when Tony was 5. Tony was taken to an orphanage and relocated from Kazakhstan to
            Uzbekistan and later to Persia (today’s Iran). In 1944, after nearly 2 years in Persia, the Polish orphans
            were sent away to different countries in Africa, America and Asia. A group of 733 came to New Zealand. A
            Polish Children’s Camp was established in Pahiatua, North Island, where the youngsters spent 5 years living
            a carefree existence before the camp was dissolved and its inhabitants sent out to different schools in New
            Zealand. Tony was fostered by Christchurch couple Jack and Elisabeth Houlahan.</p>
          <a className="btn"
            href="mailto:alina.suchanski@gmail.com">Enquire</a>
        </div>
        <div className="right-col">
          <p className="quote">"This is an honest, heartwarming, sometimes painful but often humorous story."</p>
          <p className="citation">Kim Triegaardt, The Christchurch Press, Saturday, 23 March 2013.</p>
        </div>
        <div className="clear"></div>
      </div>

      <div className="hr"></div>

      <div className="long-description" id="polish-kiwis-long">
        <div className="title">
          <h2>Polish Kiwis, <span className="sml">Pictures from an Exhibition</span></h2>
        </div>

        <div className="left-col">
          <p>2005 marked the 60th anniversary of the end of World War II. To commemorate this historic event The Polish
            Association in Christchurch and Canterbury Museum organised an exhibition titled Polish Kiwis. The
            exhibition was a collection of stories, photographs and artefacts from the Polish survivors of World War II
            now living in Canterbury.</p>
          <p>Alina Suchanski, Polish Kiwi and exhibition organiser, has turned the exhibition into a book, Polish Kiwis,
            Pictures from an Exhibition. The book, as the exhibition before, contains the brave stories of the Polish
            men and women caught in a war that saw them expelled from their homeland and given new lives on the other
            side of the world.</p>
          <p>The book illustrates the impact the war had on the lives of survivors. Alina Suchanski’s aim was to
            preserve the stories for generations to come. “These stories are important because they show a great human
            capacity to overcome adversity. They show people’s ability to put horrible experiences behind them and
            flourish in the safe, nourishing environment, such as New Zealand.”</p>
          <p>Alina has dedicated the book to “the orphaned Polish Children and their caregivers, the Polish soldiers who
            fought on many European battlegrounds, and the Warsaw Uprising insurgents.”</p>
          <a className="btn"
            href="mailto:alina.suchanski@gmail.com">Enquire</a>
        </div>
        <div className="right-col">
          <p className="quote">“This is a lavish souvenir of last year’s 60th anniversary exhibition, at the Canterbury
            Museum, of Polish refugees’ arrival in New Zealand, after World War 2.</p>
          <p className="quote">However, the book can also stand alone as an absorbing read, thanks to the testaments of its
            contributors. The stories of the inhuman treatment they endured under German and Russian captors, before
            finding freedom in New Zealand, are heartbreaking. The writers never lapse into maudlin sentimentality but
            the message is clear – lest we forget.”</p>
          <p className="citation">Mike Crean, The Christchurch Press, Saturday, 8 July 2006</p>
        </div>
        <div className="clear"></div>
      </div>

      

      <div className="hr"></div>

      <a name="film"></a>
      <div className="long-description" id="poles-apart-long">
        <div className="title">
          <h2>Poles Apart <span className="sml"></span></h2>
        </div>
        <div className="left-col">
          <p>Poles Apart is the story of 733 Polish orphans who came to New Zealand in 1944. With a backdrop provided by
            the horrific events of World War 2, the documentary traces the long journey that takes them from the warmth
            and comfort of their homes in Poland to the freezing barracks of Soviet forced labour camps in Siberia and
            Kazakhstan, to the suffocating heat and mud huts in Uzbekistan, to converted harems and stables of the Shah
            of Persia and finally to a former POW camp in Pahiatua, New Zealand. On their journey the children are
            exposed to the best and worst of humanity.</p>
          <p>Sixty years on, the members of the Pahiatua Polish Children’s Camp tell their stories with dignity, humour
            and pride. This is a compelling tale of survival, and a celebration of the triumph of human spirit against
            formidable odds.</p>
          <a className="btn"
            href="mailto:alina.suchanski@gmail.com">Enquire</a>
        </div>
        <div className="right-col">
          <div className="product-image"></div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  </section>
    </>
  )
}

export default App
