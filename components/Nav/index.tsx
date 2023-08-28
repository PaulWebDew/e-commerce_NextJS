import { FC } from 'react';
import Link from 'next/link';

import style from '@/components/Nav/Nav.module.scss'
import { useRouter } from 'next/router';

interface Props {}

const Nav: FC = ({}) => {
   const router = useRouter();
   const {pathname} = router;
  return <div>
   <a className={style.admin}>
            <svg fill='inherit' enableBackground="new 0 0 48 48" height="25px" id="Layer_1" version="1.1" viewBox="0 0 48 48" width="25px" xmlns="http://www.w3.org/2000/svg" >
               <path clipRule="evenodd" d="M43,43H8c-2.209,0-4-1.791-4-4V19.858C2.277,19.412,1,17.862,1,16v-2.973  c0-0.002,0-0.003,0-0.005V13c0-0.157,0.043-0.3,0.107-0.433c0.005-0.009,0.012-0.015,0.017-0.023  c0.066-0.127,0.159-0.232,0.271-0.32l6.83-6.829C8.407,5.161,8.68,5,9,5h0.021c0.002,0,0.004,0,0.006,0h5.994  c0.002,0,0.004,0,0.006,0h5.994c0.002,0,0.004,0,0.006,0h5.994c0.002,0,0.004,0,0.006,0h5.994c0.002,0,0.004,0,0.006,0H43  c2.209,0,4,1.791,4,4l0,0v30C47,41.209,45.209,43,43,43z M15,41L15,41v-9h-4v9l0,0H15z M3,16c0,1.104,0.896,2,2,2s2-0.896,2-2v-2H3  V16z M9.381,7l-5,5h3.238l5-5H9.381z M9,16c0,1.104,0.896,2,2,2s2-0.896,2-2v-2H9V16z M15.381,7l-5,5h3.238l5-5H15.381z M15,16  c0,1.104,0.896,2,2,2s2-0.896,2-2v-2h-4V16z M21.381,7l-5,5h3.238l5-5H21.381z M21,16c0,1.104,0.896,2,2,2s2-0.896,2-2v-2h-4V16z   M27.381,7l-5,5h3.238l5-5H27.381z M32,8.381l-5,5V16c0,2.209-1.791,4-4,4c-1.201,0-2.267-0.541-3-1.379  C19.267,19.459,18.201,20,17,20s-2.267-0.541-3-1.379C13.267,19.459,12.201,20,11,20c-1.203,0-2.268-0.541-3.002-1.381  C7.477,19.21,6.789,19.654,6,19.858V39c0,1.104,0.896,2,2,2h1l0,0V31c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1v10l0,0h13  c1.104,0,2-0.896,2-2V8.381z M45,9c0-1.104-0.896-2-2-2h-9v32c0,0.732-0.211,1.41-0.555,2H43c1.104,0,2-0.896,2-2V9z M28,32L28,32  h-8l0,0c-0.553,0-1-0.447-1-1v-7c0-0.553,0.447-1,1-1h8c0.553,0,1,0.447,1,1v7C29,31.553,28.553,32,28,32z M27,25h-6v5h6V25z" />
            </svg>
            E-comerse Admin
      </a>
   <ul className={style.navlist}>

      <li className={pathname.includes('/dashboard')?style.active +' '+style.listitem:style.inactive +' '+style.listitem}>
         <Link href={'/dashboard'}>
            <svg enableBackground="new 0 0 48 48" height="25px" version="1.1" viewBox="0 0 48 48" width="25px">
               <g id="Expanded"><g><g><path d="M24,48C10.767,48,0,37.233,0,24S10.767,0,24,0s24,10.767,24,24S37.233,48,24,48z M24,2C11.869,2,2,11.869,2,24     s9.869,22,22,22s22-9.869,22-22S36.131,2,24,2z"/></g><g><path d="M24,28c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S26.206,28,24,28z M24,22c-1.103,0-2,0.897-2,2s0.897,2,2,2     s2-0.897,2-2S25.103,22,24,22z"/></g><g><path d="M26.122,22.879c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l9.899-9.899     c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-9.899,9.899C26.633,22.781,26.377,22.879,26.122,22.879z"/></g><g><path d="M9,25H5c-0.552,0-1-0.447-1-1s0.448-1,1-1h4c0.552,0,1,0.447,1,1S9.552,25,9,25z"/></g><g><path d="M6.447,32.271c-0.393,0-0.765-0.232-0.924-0.617c-0.211-0.511,0.031-1.096,0.542-1.307l3.696-1.53     c0.509-0.213,1.095,0.03,1.306,0.541c0.211,0.511-0.031,1.096-0.542,1.307l-3.696,1.53C6.704,32.246,6.574,32.271,6.447,32.271z"/></g><g><path d="M41.552,32.271c-0.127,0-0.257-0.024-0.382-0.076l-3.695-1.531c-0.51-0.212-0.752-0.797-0.541-1.307     c0.211-0.511,0.797-0.754,1.307-0.541l3.695,1.531c0.51,0.212,0.752,0.797,0.541,1.307     C42.316,32.039,41.944,32.271,41.552,32.271z"/></g><g><path d="M42.999,25.001L42.999,25.001l-4-0.001c-0.552,0-1-0.448-1-1c0-0.553,0.448-1,1-1l0,0l4,0.001c0.553,0,1,0.448,1,1     C43.999,24.554,43.551,25.001,42.999,25.001z"/></g><g><path d="M37.858,19.26c-0.393,0-0.765-0.232-0.924-0.617c-0.211-0.511,0.031-1.096,0.542-1.307l3.695-1.529     c0.509-0.211,1.095,0.031,1.306,0.541c0.211,0.511-0.031,1.096-0.542,1.307l-3.695,1.529     C38.115,19.235,37.986,19.26,37.858,19.26z"/></g><g><path d="M29.74,11.142c-0.127,0-0.257-0.024-0.382-0.076c-0.51-0.212-0.752-0.797-0.541-1.307l1.531-3.694     c0.211-0.51,0.796-0.752,1.307-0.541c0.51,0.212,0.752,0.797,0.541,1.307l-1.531,3.694C30.504,10.909,30.132,11.142,29.74,11.142     z"/></g><g><path d="M24,10L24,10c-0.553,0-1-0.448-1-1l0.001-3.999c0-0.553,0.448-1,1-1l0,0c0.553,0,1,0.448,1,1L25,9     C25,9.553,24.552,10,24,10z"/></g><g><path d="M18.26,11.142c-0.393,0-0.765-0.232-0.924-0.617l-1.529-3.695c-0.211-0.511,0.031-1.096,0.542-1.307     c0.51-0.212,1.096,0.031,1.306,0.541l1.529,3.695c0.211,0.511-0.031,1.096-0.542,1.307C18.517,11.117,18.388,11.142,18.26,11.142     z"/></g><g><path d="M13.394,14.394c-0.256,0-0.512-0.098-0.708-0.293l-2.827-2.829c-0.39-0.391-0.39-1.024,0-1.414     c0.391-0.391,1.024-0.391,1.415,0l2.827,2.829c0.39,0.391,0.39,1.024,0,1.414C13.905,14.296,13.649,14.394,13.394,14.394z"/></g><g><path d="M10.142,19.26c-0.127,0-0.257-0.024-0.383-0.076l-3.695-1.532c-0.51-0.212-0.752-0.797-0.541-1.307     s0.795-0.753,1.307-0.541l3.695,1.532c0.51,0.212,0.752,0.797,0.541,1.307C10.906,19.027,10.534,19.26,10.142,19.26z"/></g><g><path d="M33,40H15c-0.552,0-1-0.447-1-1v-6c0-0.553,0.448-1,1-1h18c0.552,0,1,0.447,1,1v6C34,39.553,33.552,40,33,40z M16,38h16     v-4H16V38z"/></g></g></g>
            </svg>
            Dashboard
         </Link>
      </li>
      <li className={pathname.includes('/products')?style.active +' '+style.listitem:style.inactive +' '+style.listitem}>
         <Link href={'/products'}>
            <svg width='25px' height='25px' viewBox="0 0 128 128" >
               <g><path d="M48,98c0,1.654,1.346,3,3,3h26c1.654,0,3-1.346,3-3v-7.382c0.615-0.703,1-1.612,1-2.618c0-2.206-1.794-4-4-4H51   c-2.206,0-4,1.794-4,4c0,1.005,0.385,1.914,1,2.618V98z M77,99H51c-0.552,0-1-0.449-1-1v-6.142C50.322,91.942,50.653,92,51,92h1v3   c0,1.103,0.897,2,2,2h20c1.103,0,2-0.897,2-2v-3h1c0.347,0,0.678-0.058,1-0.142V98C78,98.551,77.552,99,77,99z M74,92v3H54v-3H74z    M51,86h26c1.103,0,2,0.897,2,2s-0.897,2-2,2H51c-1.103,0-2-0.897-2-2S49.897,86,51,86z"/><path d="M103,61h-7.026C96.609,60.162,97,59.13,97,58V17h1c1.654,0,3-1.346,3-3V4c0-1.654-1.346-3-3-3H30c-1.654,0-3,1.346-3,3v10   c0,1.654,1.346,3,3,3h1v41c0,1.13,0.391,2.162,1.026,3H25c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h1v41c0,3.925,3.075,7,7,7   h62c3.925,0,7-3.075,7-7V79h1c1.654,0,3-1.346,3-3V64C106,62.346,104.654,61,103,61z M29,14V4c0-0.551,0.448-1,1-1h68   c0.552,0,1,0.449,1,1v10c0,0.551-0.448,1-1,1H30C29.448,15,29,14.551,29,14z M33,58V17h62v41c0,1.626-1.374,3-3,3H36   C34.374,61,33,59.626,33,58z M100,120c0,2.804-2.196,5-5,5H33c-2.804,0-5-2.196-5-5V79h72V120z M104,76c0,0.551-0.448,1-1,1H25   c-0.552,0-1-0.449-1-1V64c0-0.551,0.448-1,1-1h78c0.552,0,1,0.449,1,1V76z"/><path d="M75,21H53c-2.206,0-4,1.794-4,4c0,1.005,0.385,1.914,1,2.618V35c0,1.654,1.346,3,3,3h22c1.654,0,3-1.346,3-3v-7.382   c0.615-0.703,1-1.612,1-2.618C79,22.794,77.206,21,75,21z M53,23h22c1.103,0,2,0.897,2,2c0,0.597-0.268,1.127-0.684,1.494   c-0.009,0.009-0.02,0.015-0.029,0.024C75.938,26.814,75.493,27,75,27H53c-0.493,0-0.938-0.186-1.287-0.482   c-0.009-0.009-0.02-0.015-0.029-0.024C51.268,26.127,51,25.597,51,25C51,23.897,51.897,23,53,23z M56,29h16v3H56V29z M75,36H53   c-0.552,0-1-0.449-1-1v-6.142C52.322,28.942,52.653,29,53,29h1v3c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-3h1   c0.347,0,0.678-0.058,1-0.142V35C76,35.551,75.552,36,75,36z"/></g>
            </svg>
            Products
         </Link>
      </li>
      <li className={pathname.includes('/categories')?style.active +' '+style.listitem:style.inactive +' '+style.listitem}>
         <Link href={'/categories'}>
         <svg width={25} height={25} id="Layer_1" viewBox="0 0 32 32" >
            <g><g><path d="M16,1c-2.3652954,0-4.2827759,1.9174805-4.2827759,4.2827759S13.6347046,9.5655518,16,9.5655518    s4.2827759-1.9174805,4.2827759-4.2827759S18.3652954,1,16,1z M16,7.2827759c-1.1045532,0-2-0.8954468-2-2s0.8954468-2,2-2    s2,0.8954468,2,2S17.1045532,7.2827759,16,7.2827759z"/></g><g><circle cx="16" cy="26.7172127" r="4.2827868"/></g><g><circle cx="5.2827868" cy="26.7172127" r="4.2827868"/></g><g><circle cx="26.7172127" cy="26.7172127" r="4.2827868"/></g><g><path d="M16,23.4345703c-0.5522461,0-1-0.4477539-1-1V9.5654297c0-0.5522461,0.4477539-1,1-1s1,0.4477539,1,1v12.8691406    C17,22.9868164,16.5522461,23.4345703,16,23.4345703z"/></g><g><path d="M26.7172852,23.4511719c-0.5522461,0-1-0.4477539-1-1V15.237793H6.2827148v7.1967773c0,0.5522461-0.4477539,1-1,1    s-1-0.4477539-1-1V14.237793c0-0.5522461,0.4477539-1,1-1h21.4345703c0.5522461,0,1,0.4477539,1,1v8.2133789    C27.7172852,23.003418,27.2695313,23.4511719,26.7172852,23.4511719z"/></g></g>
         </svg>
            Categories
         </Link>
      </li>
      <li className={pathname.includes('/orders')?style.active +' '+style.listitem:style.inactive +' '+style.listitem}>
         <Link href={'/orders'}>
            <svg viewBox="0 0 22.078 22.079" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg">
               <g data-name="Layer 2" id="Layer_2"><g data-name="Layer 1" id="Layer_1-2"><path d="M14.607,21.41H1.673a1,1,0,0,1-1-1V1.673a1,1,0,0,1,1-1h3.68v1A1.674,1.674,0,0,0,7.025,3.345h5.352A1.674,1.674,0,0,0,14.05,1.673v-1h3.68a1,1,0,0,1,1,1V9.254a.335.335,0,0,0,.67,0V1.673A1.675,1.675,0,0,0,17.73,0H1.673A1.675,1.675,0,0,0,0,1.673V20.406a1.675,1.675,0,0,0,1.673,1.673H14.607A.335.335,0,0,0,14.607,21.41ZM6.022.669h7.36v1a1,1,0,0,1-1,1H7.025a1,1,0,0,1-1-1Zm6.914,5.8h-2.23a.335.335,0,0,1,0-.669h2.23A.335.335,0,0,1,12.936,6.468ZM4.712,5.8H8.921a.335.335,0,0,1,0,.669H4.712A.335.335,0,0,1,4.712,5.8Zm-1.784.669c-.273,0-.781.079-.781-.335s.508-.331.781-.334A.335.335,0,0,1,2.928,6.468ZM12.936,9.59H8.921a.335.335,0,0,1,0-.669h4.015A.335.335,0,0,1,12.936,9.59ZM4.712,8.921H7.137a.335.335,0,0,1,0,.669H4.712A.335.335,0,0,1,4.712,8.921ZM2.928,9.59H2.481a.335.335,0,0,1,0-.669h.447A.335.335,0,0,1,2.928,9.59Zm10.008,3.123h-2.23a.335.335,0,0,1,0-.669h2.23A.335.335,0,0,1,12.936,12.713Zm-4.015,0H4.712a.335.335,0,0,1,0-.669H8.921A.335.335,0,0,1,8.921,12.713Zm-5.993,0H2.481a.335.335,0,0,1,0-.669h.447A.335.335,0,0,1,2.928,12.713Zm5.993,3.122H4.712a.335.335,0,0,1,0-.669H8.921A.335.335,0,0,1,8.921,15.835Zm-5.993,0c-.273,0-.781.08-.781-.334s.508-.331.781-.335A.335.335,0,0,1,2.928,15.835Zm5.993,3.123H4.712a.335.335,0,0,1,0-.669H8.921A.335.335,0,0,1,8.921,18.958Zm-5.993,0c-.273,0-.781.08-.781-.335s.508-.33.781-.334A.335.335,0,0,1,2.928,18.958ZM22.072,13.09a1.438,1.438,0,0,0-1.765-1.259,1.447,1.447,0,0,0-1.99-.583,1.473,1.473,0,0,0-1.471-.231V6.958c-.028-1.524-2.627-1.52-2.655,0v8.216c-2.1-.485-5.019.363-4,2.762a.335.335,0,0,0,.351.153,6.531,6.531,0,0,1,2.029-.164c1.224.351,2.441,1.865,3.535,2.307v1.512a.334.334,0,0,0,.334.334h5.307a.333.333,0,0,0,.334-.334V13.19A.879.879,0,0,0,22.072,13.09Zm-.662,8.319H16.772V20.294H21.41Zm0-1.784H16.437c-1.084-.373-2.377-2.015-3.664-2.337a5.757,5.757,0,0,0-2.066.088c-.505-1.845,2.766-1.81,3.728-1.456a.337.337,0,0,0,.425-.322V6.958c.009-.632,1.308-.644,1.317,0v4.729a.336.336,0,0,0,.6.2.788.788,0,0,1,1.23,0,.337.337,0,0,0,.239.135c.291,0,.467-.346.784-.3a.772.772,0,0,1,.751.607.334.334,0,0,0,.189.235c.23.11.433-.135.67-.107a.775.775,0,0,1,.769.73Z" data-name="study program" id="study_program"/></g></g>
            </svg>
            Orders
         </Link>
      </li>
      <li className={pathname.includes('/settings')?style.active +' '+style.listitem:style.inactive +' '+style.listitem}>
         <Link href={'/settings'}>
            <svg enableBackground="new 0 0 64 64" height="25px" id="Layer_1" version="1.1" viewBox="0 0 64 64" width="25px" >
               <g><path d="M62.37,54.759L42.63,35.015c-2.614-2.614-1.352-4.534-1.352-4.534l-0.012-0.013   c0.873-1.798,0.579-4.015-0.911-5.508l-7.684-7.684c-1.886-1.887-4.944-1.887-6.831,0l-1.174,1.172l-0.125,0.126   c0,0-0.539,1.072,1.918,1.215l0.001,0.003c0,0,1.13,0.096,2.234,1.2l2.72,2.72c0.994,0.993,1.021,2.029,0.975,2.495   c-0.227,1.28-0.817,2.507-1.808,3.495c-0.981,0.984-2.201,1.569-3.471,1.797c-0.563,0.052-1.634-0.045-2.82-1.231l-2.062-2.065   c-1.299-1.299-1.575-2.975-1.575-2.975h-0.003c-0.503-2.279-1.191-1.569-1.191-1.569l-1.3,1.3   c-1.886,1.885-1.886,4.944-0.001,6.831l7.683,7.682c1.57,1.571,3.947,1.814,5.79,0.771l0.014,0.015c0,0,1.691-1.069,3.967,1.209   l20.486,20.489c0,0,2.49,2.445,4.839,0.097l1.938-1.938C63.53,59.383,64.917,57.306,62.37,54.759z" /><path d="M40.965,52.071c-1.226-1.458-3.194-0.554-3.194-0.554l-0.005-0.013c-0.168,0.057-0.333,0.124-0.504,0.177   c-0.054,0.02-0.088,0.042-0.151,0.067c-2.688,0.99-2.713,3.034-2.713,3.034v2.397c-0.038,2.04-1.666,2.398-2.508,2.452h-0.975   c-2.092,0.042-2.467-1.237-2.521-1.921v-2.76c0-2.538-2.833-3.239-2.833-3.239l0.009-0.012c-1.534-0.454-2.985-1.099-4.348-1.873   c-0.057-0.025-0.102-0.04-0.164-0.071c-2.293-1.149-4.002,0.472-4.002,0.472l-1.949,1.949c-1.361,1.356-2.368,0.724-2.737,0.389   l-0.157-0.159l-0.006-0.008h-0.001l-1.601-1.601c-0.001-0.003-0.003-0.003-0.006-0.006c-1.253-1.251,0.377-2.972,0.594-3.189   l1.901-1.899c0.001,0,0.001-0.005,0.001-0.005c1.465-1.465,0.314-3.746,0.314-3.746s0.016-0.003,0.019-0.003   c-0.731-1.328-1.335-2.735-1.766-4.223c-0.014-0.039-0.03-0.064-0.045-0.105c-0.965-2.668-3.399-2.623-3.446-2.623l-1.847,0.008   c-2.162,0.003-2.551-1.402-2.609-2.141l-0.005-1.489c0.013-0.615,0.236-2.355,2.423-2.374c0.001,0,0.001,0,0.001,0l2.367-0.01   c0,0,2.231,0.104,3.023-2.273c0.011-0.03,0.026-0.046,0.036-0.076c0.475-1.751,1.16-3.413,2.05-4.942c0,0,0-0.001,0-0.003   c1.13-2.273-0.484-3.978-0.695-4.185l-1.61-1.608c0,0,0-0.001-0.003-0.004c-1.553-1.553-0.489-2.899-0.12-3.283l0.839-0.839   c0,0,1.77-1.874,3.644,0c0.003,0,0.003,0.001,0.005,0.003l1.83,1.83c0.345,0.327,1.753,1.472,3.773,0.491   c0.008-0.003,0.011-0.003,0.018-0.006c1.3-0.736,2.698-1.314,4.153-1.758c0.039-0.016,0.06-0.035,0.104-0.053   c2.344-0.921,2.781-2.366,2.846-3.113V6.441c0.013-0.457,0.188-2.256,2.289-2.256h1.314c0,0,2.397-0.08,2.397,2.589v2.062   c0.013,0.588,0.218,2.547,2.478,3.344c0.004,0.001,0.004,0.003,0.01,0.005c1.368,0.377,2.673,0.907,3.911,1.547l0.013-0.011   c0,0,2.82,1.75,4.949-0.377l1.424-1.424c0.066-0.066,1.993-1.932,3.434-0.491c0.003,0.001,0.006,0.003,0.006,0.006l1.18,1.177   c0,0,1.431,1.742-0.371,3.545l-1.595,1.595c0,0-1.663,1.704-0.455,4.286c0.021,0.045,0.021,0.072,0.04,0.116   c0.736,1.341,1.317,2.776,1.745,4.279c0.004-0.003,0.02-0.016,0.02-0.016s0.516,2.59,2.826,2.584l2.242-0.01h0.06h0.101   c0.065-0.001,2.738-0.044,2.744,2.481l0.007,1.061v0.003v0.261c-0.022,0.625-0.32,2.187-2.805,2.196l-2.15,0.007   c-1.681,0.016-2.517,1.393-2.885,2.269c-0.14,0.383-0.467,1.625,0.719,2.792l0.305,0.3c0.006,0.005,0.01,0.008,0.014,0.013   c1.772,1.9,3.037-0.761,3.037-0.761c0.804-1.336,1.979-1.604,2.608-1.647h3.279c0.997,0,1.805-0.807,1.805-1.805v-8.325   c0-0.995-0.808-1.805-1.805-1.805h-3.128c-2.453,0-3.072-2.276-3.072-2.276s-0.016,0.004-0.021,0.006   c-0.365-1.05-0.78-2.079-1.277-3.061c0-0.003,0-0.005-0.003-0.008c-0.827-1.82,0.724-3.371,0.809-3.452l1.996-2   c0.704-0.705,0.704-1.847,0-2.553l-5.886-5.886c-0.707-0.704-1.849-0.703-2.553,0.001L46.7,8.25   c-2.264,2.278-4.387,1.178-4.387,1.178l-0.003,0.006c-0.814-0.39-1.647-0.742-2.503-1.047c-0.04-0.019-0.068-0.036-0.109-0.053   c-1.893-0.775-2.142-2.715-2.166-3.501V2.734c0-0.997-0.809-1.805-1.805-1.805h-8.665c-0.995,0-1.805,0.808-1.805,1.805v2.609   c0,2.613-2.21,3.009-2.21,3.009l0.013,0.013c-0.956,0.341-1.893,0.722-2.795,1.17c-0.016,0.006-0.025,0.003-0.041,0.009   c-1.802,0.798-2.798,0.016-3.051-0.229l-0.062-0.062l-0.009-0.011h-0.001L14.66,6.796c-0.706-0.704-1.849-0.704-2.553-0.003   l-5.892,5.884c-0.704,0.706-0.706,1.847,0,2.552l1.956,1.958c0,0,1.696,1.635,0.855,3.471c0,0.003,0,0.003,0,0.003   c-0.487,0.957-0.896,1.958-1.258,2.98c-0.025,0.053-0.049,0.094-0.074,0.156c-0.75,1.831-2.143,2.18-2.888,2.234H1.96   c-0.997,0-1.805,0.81-1.805,1.805v8.325c0,0.998,0.808,1.805,1.805,1.805h3.24c1.833,0,2.315,1.691,2.315,1.691   s0.013-0.031,0.021-0.046c0.375,1.167,0.803,2.31,1.336,3.395c-0.001,0-0.011,0.005-0.011,0.005s1.145,1.941-0.138,3.224v0.003   l-2.519,2.518c-0.704,0.704-0.704,1.85,0,2.551l5.887,5.886c0.706,0.706,1.847,0.706,2.551,0l2.266-2.262l0.005-0.007l0.101-0.099   c0.311-0.296,1.402-1.101,3.507-0.232c0.022,0.011,0.035,0.014,0.055,0.021c0.803,0.38,1.629,0.726,2.475,1.023l-0.01,0.009   c0,0,2.217,0.66,2.217,2.887v2.732c0,0.998,0.81,1.805,1.805,1.805h8.665c0.996,0,1.805-0.807,1.805-1.805v-2.992   c0.04-0.66,0.333-1.906,1.886-2.517c0.06-0.025,0.098-0.046,0.145-0.067c0.6-0.209,1.176-0.464,1.756-0.712   c1.401-0.778,0.102-2.364,0.102-2.364L40.965,52.071z" /></g>
            </svg>
            Settings
         </Link>
      </li>
   </ul>
  </div>
}

export default Nav