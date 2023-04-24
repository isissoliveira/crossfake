import { useState } from 'react';
import './galeria.css'
import photos from './imagens.json';
import Photo from 'componentes/card';

export default function Galeria() {
    const [opcTags, setOpcTags] = useState([{ nome: "Treinos", compoeFiltro: true }, { nome: "Campeonatos", compoeFiltro: false }, { nome: "Festas", compoeFiltro: false }, { nome: "Murphy", compoeFiltro: false }]);
    // const photos = [
    //     { url: "https://www.wane.com/wp-content/uploads/sites/21/2021/06/Lindsey-Motl.jpg", tags: [opcTags[0].nome] },
    //     { url: "https://thumbnails.crossfit.com/mainsite/w20230219/thumbnail/CrossFit_Marrickville_23-1.jpg", tags: [opcTags[3].nome, opcTags[0].nome] },
    //     { url: "https://cdn.shopify.com/s/files/1/1099/4438/files/blog.png", tags: [opcTags[0].nome] },
    //     { url: "https://blog.touchandgo.com.br/wp-content/uploads/2020/10/BC_IV-CrossFit-Games-2017-268.jpg", tags: [opcTags[3].nome] },
    //     { url: "https://cdn.weasy.io/users/boxpt/img_0619.jpg", tags: [opcTags[0].nome] },
    //     { url: "https://i.pinimg.com/originals/06/7b/04/067b04754a6d920d8e9a41d7904758bf.jpg", tags: [opcTags[2].nome] },
    //     { url: "https://crossfitmorgantown.com/wp-content/uploads/2018/10/parties1.jpg", tags: [opcTags[2].nome] },
    //     { url: "https://jequie.aabb.com.br/wp-content/uploads/sites/281/2019/01/IMG_20181209_121221490.jpg", tags: [opcTags[1].nome] },
    //     { url: "https://jequie.aabb.com.br/wp-content/uploads/sites/281/2019/01/IMG_20181208_075427564.jpg", tags: [opcTags[1].nome] },
    //     { url: "https://revistanews.com.br/wp-content/uploads/2017/12/Super-Games-3.jpg", tags: [opcTags[1].nome] },
    //     { url: "https://api.army.mil/e2/c/images/2019/08/05/560938/original.jpg", tags: [opcTags[1].nome] },
    //     { url: "https://upload.wikimedia.org/wikipedia/commons/d/da/Nano_Action.JPG", tags: [opcTags[1].nome] },
    //     { url: "https://s.marketwatch.com/public/resources/images/MW-GI242_gym_bi_ZG_20180430121249.jpg", tags: [opcTags[2].nome] }
    // ];
    const [filteredPhotos, setFilteredPhotos] = useState(photos.filter((photo) => photo.tags.includes(opcTags[0].nome)));
    const [selectedTags, setSelectedTags] = useState([opcTags[0].nome])

    const toggleFiltraPhotos = (tag) => {
        let auxSelectedTags = []
        if (tag.compoeFiltro) {
            auxSelectedTags = selectedTags.filter(selTag => selTag !== tag.nome)
            setSelectedTags(auxSelectedTags)
            setFilteredPhotos(filteredPhotos.filter((photo) => photo.tags.some(photoTag => auxSelectedTags.some(selTag => selTag === photoTag))))

        } else {
            setSelectedTags([...selectedTags, tag.nome])
            setFilteredPhotos([...filteredPhotos, ...photos.filter((photo) => photo.tags.includes(tag.nome) && !filteredPhotos.some(filteredPhoto => filteredPhoto.url === photo.url))])
        }
        tag.compoeFiltro = !tag.compoeFiltro;
    }

    return (
        <section className='galeria'>
            <h4>Navegue pela galeria:</h4>
            {opcTags.map((objTag, indice) => {
                return (<h5 onClick={() => toggleFiltraPhotos(objTag)} key={indice}
                    style={objTag.compoeFiltro ? { backgroundColor: "rgba(80, 172, 211, 0.382)", boxShadow: "0px 0px 2px 1px rgba(80, 172, 211, 0.582)" } : {}}  >{objTag.nome}</h5>)
            })}
            <div className='cards'>
                {filteredPhotos.map((photo) => {
                    return (
                        <Photo photo={photo} key={photo.id} />
                    )
                })}
            </div>
        </section>
    )
}
