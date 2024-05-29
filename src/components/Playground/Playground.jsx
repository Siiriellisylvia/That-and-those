import { useState, useEffect } from "react";
import "../Playground/Playground.css";

const NavigationBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <nav className={visible ? "navigation" : "navigation hidden"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
        eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
        sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
        hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec
        vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
        amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
        sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
        bibendum sodales, augue velit cursus nunc,Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
        massa. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
        eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
        justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
        semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
        porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
        metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
        nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
        Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
        quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
        nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
        odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
        faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
        tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
        sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
        cursus nunc,Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
        vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
        tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
        eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat
        a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
        rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
        ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
        tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
        amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
        pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
        tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
        ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
        fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
        consequat, leo eget bibendum sodales, augue velit cursus nunc,Lorem
        ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
        eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
        sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
        hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec
        vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
        amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
        sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
        bibendum sodales, augue velit cursus nunc,Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
        massa. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
        eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
        justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
        semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
        porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
        metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
        nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
        Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
        quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
        nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
        odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
        faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
        tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
        sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
        cursus nunc,Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
        vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
        tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
        eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat
        a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
        rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
        ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
        tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
        amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
        pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
        tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
        ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
        fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
        consequat, leo eget bibendum sodales, augue velit cursus nunc,Lorem
        ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
        eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
        sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
        hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec
        vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
        amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
        sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
        bibendum sodales, augue velit cursus nunc,
      </p>
    </>
  );
};

export default NavigationBar;
