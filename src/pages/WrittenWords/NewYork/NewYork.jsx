import React from 'react';
import Container from '../../../components/Container/Container';
import styles from './NewYork.module.css';

const NewYork = () => {
    return (
        <Container>
            <div className={styles['collumns']}>
            <div className={styles['col-1']}>
            <p>När New York Times i slutet av 90-talet bestämde sig 
för att låta uppföra ett nytt huvudkontor (2007) för sina 
2 500 anställda skred man till verket med samma nitiska 
iver och grundlighet som utmärker dess journalisters 
dagliga värv i sitt researcharbete. Ledningens ambitioner 
var lika höga som tidningens solida renommé: ”Building on budget and on time isn’t good enough”.1 Efter 
att Renzo Piano genom en inbjuden tävling utsetts som 
den bäst lämpade arkitekten att förverkliga tidningens 
storslagna visioner vidtog en lång och intensiv projektering där beställaren var djupt engagerad och involverad 
i hela design- och byggprocessen. Där skyskrapan möter 
mark har Renzo Piano valt att tydligt exponera stommen 
i dess transparenta bottenvåning medan han upptill låtit 
fasadernas flor av solavskärmande keramikstänger, som 
blänker som silver i solen, fortsätta förbi dess glasade 
kropp och gradvis dematrialiseras till tomma intet.</p>
</div>
<div className={styles['col-2']}>
<p>En annan skyskrapa som sticker ut är Norman Fosters tillbyggnad till k-märkta Hearst Building (2006) 
från 1928 i art-deco stil, som redan från början var tänkt 
som en skyskrapa innan depressionen satte stopp för de 
storvulna planerna och som därför aldrig blev högre än 
sina sex våningar.2 Foster har behållit den ursprungliga 
byggnadens fasader som en sockelkuliss medan hela dess 
innanmäte blåsts ut och omvandlats till ett klerestoriebelyst atrium där skrapans kraftfulla vertikala och diagonalställda stålpelare förs ner. Byggnadens strukturella 
diagrid, som reducerar den erforderliga mängden stål 
med 20 procent,3 känns igen från hans 40 våningar höga 
fallossymbol Swiss Re med smeknamnet The Gherkin i 
London från 2004. Detta är Fosters första stora byggnad 
som uppförs på den här sidan av Atlanten4 och tillika den 
första kontorsbyggnaden i New York som förärats den 
näst högsta klassen av energi- och miljöanpassad design 
eller så kallad leed där fem huvudfaktorer, som energieffektivitet, materialval och inomhusklimat, vägs in.</p>
</div>
</div>
        </Container>
    );
};

export default NewYork;