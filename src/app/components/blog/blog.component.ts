import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  listPosts: IPost[] = [
    {
      title:
        'Científicos descubren una señal de radio proveniente de una luna de Saturno',
      img: 'https://picsum.photos/400/250?random=Math.floor(Math.random() * 1000)',
      body: 'Un equipo de astrónomos del Jet Propulsion Laboratory (JPL) de la NASA ha detectado una señal de radio altamente estructurada proveniente de Encélado, una de las lunas heladas de Saturno, reavivando las especulaciones sobre la posible existencia de vida inteligente fuera de la Tierra. La señal, captada por la sonda espacial Cassini-X en órbita desde 2023, tiene un patrón que los científicos describen como “no aleatorio y matemáticamente coherente”, características que suelen asociarse con origen artificial. Encélado ha sido objeto de estudio desde hace años debido a sus géiseres de vapor y océano subterráneo, que podrían albergar condiciones favorables para la vida. Sin embargo, esta es la primera vez que se registra una emisión que podría interpretarse como un intento de comunicación. La NASA y la ESA han convocado una conferencia conjunta para el 15 de julio, donde revelarán análisis más detallados y posibles planes para enviar una misión directa al polo sur de la luna.',
      date: '22/02/1993',
    },
    {
      title: 'Un loro hackea el asistente virtual de su dueño y pide 100 piñas por Amazon',
      img: 'https://picsum.photos/400/250?random=Math.floor(Math.random() * 1000)+1',
      body: 'Un loro amazónico llamado Rambo se ha convertido en sensación en redes sociales luego de que, aparentemente, lograra hackear el asistente virtual de su dueño y realizar un pedido masivo de frutas exóticas a través de Amazon. El dueño, Andrés Molina, descubrió la situación al recibir una notificación en su celular que confirmaba la compra de 100 piñas frescas con entrega urgente.',
      date: '26/12/2023',
    },
  ];
  post: IPost = {
    title: '',
    img: '',
    body: '',
    date: '',
  };

  showSuccess = false;

  addPost() {
    if (
      !this.post.title ||
      !this.post.img ||
      !this.post.body ||
      !this.post.date
    ) {
      alert('Faltan datos para completar la noticia.');
    } else {
      this.listPosts.push({
        title: this.post.title,
        img: this.post.img,
        body: this.post.body,
        date: this.post.date,
      });
      this.post = { title: '', img: '', body: '', date: '' };
    }
  }

  pintarPosts() {
    //He intentado poner la fecha en formato español pero parece que no funciona el parseo dentro del litetal template
    let html = ``;
    this.listPosts.forEach((p) => {
      html += `<li class="noticia">
          <h3 class="post-titulo">${p.title}</h3>
          <div class="post-fecha">${p.date}</div>
          <div class="post-img"><img src="${p.img}" /> </div>
          <div class="post-body">${p.body}</div>         
        </li>`;
    });
    return html;
  }
}
