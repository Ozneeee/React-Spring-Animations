import { useState } from "react";
import "./Scroll.css";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

export default function Scroll() {
  const [toggleTxt, setToggleTxt] = useState(false);
  const animation = useSpring({
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? "translateX(0px)" : " translateX(-50%)",
  });

  return (
    <div>
      <p className="scroll-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae
        labore ipsa accusantium quod molestias, dolores deleniti itaque, ab
        vitae adipisci laborum fugiat minus rem hic blanditiis, quaerat sapiente
        soluta? Magni omnis provident consequatur adipisci eligendi labore hic
        esse eaque itaque ipsa reiciendis nostrum voluptatem officia
        consequuntur, voluptates optio quae quis porro. Ratione ipsum quis quo
        corporis animi accusamus dolore architecto blanditiis odio? Quam
        debitis, similique provident eum illum unde asperiores, eius hic
        consectetur eligendi odit? Facere repudiandae quod inventore unde,
        pariatur obcaecati, atque nesciunt ad ipsum ipsa commodi, alias iste.
        Dolores excepturi repellat quas natus eos sapiente ut quos distinctio
        placeat corporis vero atque libero praesentium ea odit consectetur a
        veritatis inventore tempora alias, delectus modi odio? Incidunt dicta
        libero quo quos, blanditiis minima quod odit numquam beatae magnam vitae
        aut natus, provident mollitia deleniti architecto dolore repellat
        officiis. Fugit nesciunt eos, quis at illo esse ea sed suscipit,
        praesentium rerum explicabo voluptas maiores fuga quod magnam aperiam
        earum vel laboriosam dolore natus quae nisi minima possimus. Autem
        asperiores officia laudantium ex recusandae fugit in facilis sequi minus
        sapiente.
      </p>
      <p className="scroll-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae
        labore ipsa accusantium quod molestias, dolores deleniti itaque, ab
        vitae adipisci laborum fugiat minus rem hic blanditiis, quaerat sapiente
        soluta? Magni omnis provident consequatur adipisci eligendi labore hic
        esse eaque itaque ipsa reiciendis nostrum voluptatem officia
        consequuntur, voluptates optio quae quis porro. Ratione ipsum quis quo
        corporis animi accusamus dolore architecto blanditiis odio? Quam
        debitis, similique provident eum illum unde asperiores, eius hic
        consectetur eligendi odit? Facere repudiandae quod inventore unde,
        pariatur obcaecati, atque nesciunt ad ipsum ipsa commodi, alias iste.
        Dolores excepturi repellat quas natus eos sapiente ut quos distinctio
        placeat corporis vero atque libero praesentium ea odit consectetur a
        veritatis inventore tempora alias, delectus modi odio? Incidunt dicta
        libero quo quos, blanditiis minima quod odit numquam beatae magnam vitae
        aut natus, provident mollitia deleniti architecto dolore repellat
        officiis. Fugit nesciunt eos, quis at illo esse ea sed suscipit,
        praesentium rerum explicabo voluptas maiores fuga quod magnam aperiam
        earum vel laboriosam dolore natus quae nisi minima possimus. Autem
        asperiores officia laudantium ex recusandae fugit in facilis sequi minus
        sapiente.
      </p>

      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!toggleTxt) {
            setToggleTxt(true);
          }
        }}
      />
      <animated.div style={animation} className="cta-section">
        <h2>N'en rateze pas une miette</h2>
        <form>
          <label htmlFor="email">Incscrivez vous à la newsLetter</label>
          <input type="email" id="email" />
        </form>
      </animated.div>

      <p className="scroll-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae
        labore ipsa accusantium quod molestias, dolores deleniti itaque, ab
        vitae adipisci laborum fugiat minus rem hic blanditiis, quaerat sapiente
        soluta? Magni omnis provident consequatur adipisci eligendi labore hic
        esse eaque itaque ipsa reiciendis nostrum voluptatem officia
        consequuntur, voluptates optio quae quis porro. Ratione ipsum quis quo
        corporis animi accusamus dolore architecto blanditiis odio? Quam
        debitis, similique provident eum illum unde asperiores, eius hic
        consectetur eligendi odit? Facere repudiandae quod inventore unde,
        pariatur obcaecati, atque nesciunt ad ipsum ipsa commodi, alias iste.
        Dolores excepturi repellat quas natus eos sapiente ut quos distinctio
        placeat corporis vero atque libero praesentium ea odit consectetur a
        veritatis inventore tempora alias, delectus modi odio? Incidunt dicta
        libero quo quos, blanditiis minima quod odit numquam beatae magnam vitae
        aut natus, provident mollitia deleniti architecto dolore repellat
        officiis. Fugit nesciunt eos, quis at illo esse ea sed suscipit,
        praesentium rerum explicabo voluptas maiores fuga quod magnam aperiam
        earum vel laboriosam dolore natus quae nisi minima possimus. Autem
        asperiores officia laudantium ex recusandae fugit in facilis sequi minus
        sapiente.
      </p>
      <p className="scroll-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae
        labore ipsa accusantium quod molestias, dolores deleniti itaque, ab
        vitae adipisci laborum fugiat minus rem hic blanditiis, quaerat sapiente
        soluta? Magni omnis provident consequatur adipisci eligendi labore hic
        esse eaque itaque ipsa reiciendis nostrum voluptatem officia
        consequuntur, voluptates optio quae quis porro. Ratione ipsum quis quo
        corporis animi accusamus dolore architecto blanditiis odio? Quam
        debitis, similique provident eum illum unde asperiores, eius hic
        consectetur eligendi odit? Facere repudiandae quod inventore unde,
        pariatur obcaecati, atque nesciunt ad ipsum ipsa commodi, alias iste.
        Dolores excepturi repellat quas natus eos sapiente ut quos distinctio
        placeat corporis vero atque libero praesentium ea odit consectetur a
        veritatis inventore tempora alias, delectus modi odio? Incidunt dicta
        libero quo quos, blanditiis minima quod odit numquam beatae magnam vitae
        aut natus, provident mollitia deleniti architecto dolore repellat
        officiis. Fugit nesciunt eos, quis at illo esse ea sed suscipit,
        praesentium rerum explicabo voluptas maiores fuga quod magnam aperiam
        earum vel laboriosam dolore natus quae nisi minima possimus. Autem
        asperiores officia laudantium ex recusandae fugit in facilis sequi minus
        sapiente.
      </p>
      <p className="scroll-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae
        labore ipsa accusantium quod molestias, dolores deleniti itaque, ab
        vitae adipisci laborum fugiat minus rem hic blanditiis, quaerat sapiente
        soluta? Magni omnis provident consequatur adipisci eligendi labore hic
        esse eaque itaque ipsa reiciendis nostrum voluptatem officia
        consequuntur, voluptates optio quae quis porro. Ratione ipsum quis quo
        corporis animi accusamus dolore architecto blanditiis odio? Quam
        debitis, similique provident eum illum unde asperiores, eius hic
        consectetur eligendi odit? Facere repudiandae quod inventore unde,
        pariatur obcaecati, atque nesciunt ad ipsum ipsa commodi, alias iste.
        Dolores excepturi repellat quas natus eos sapiente ut quos distinctio
        placeat corporis vero atque libero praesentium ea odit consectetur a
        veritatis inventore tempora alias, delectus modi odio? Incidunt dicta
        libero quo quos, blanditiis minima quod odit numquam beatae magnam vitae
        aut natus, provident mollitia deleniti architecto dolore repellat
        officiis. Fugit nesciunt eos, quis at illo esse ea sed suscipit,
        praesentium rerum explicabo voluptas maiores fuga quod magnam aperiam
        earum vel laboriosam dolore natus quae nisi minima possimus. Autem
        asperiores officia laudantium ex recusandae fugit in facilis sequi minus
        sapiente.
      </p>
    </div>
  );
}
