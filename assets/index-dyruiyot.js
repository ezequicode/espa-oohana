import{r as i,j as e}from"./main-Cf6r6V3M.js";function p(){const s=i.useRef(null);i.useEffect(()=>(s.current=new IntersectionObserver(a=>{a.forEach(r=>{r.isIntersecting&&r.target.classList.add("visible")})},{threshold:.1}),document.querySelectorAll(".fade-in").forEach(a=>{s.current?.observe(a)}),()=>s.current?.disconnect()),[]);const n=[{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 10.5h18M3 13.5h18M6 7.5C6 5.015 8.686 3 12 3s6 2.015 6 4.5M6 16.5C6 18.985 8.686 21 12 21s6-2.015 6-4.5"})}),label:"Piscina Iluminada com Cascata"},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"})}),label:"Wi-Fi Liberado"},{icon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})]}),label:"Churrasqueira"},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"})}),label:"Fogão Cooktop (gás R$ 20 opcional)"},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"})}),label:"Geladeira Duplex"},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"})}),label:"Bombona de Gelo e Isopor Grande"},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})}),label:"6 Jogos de Mesas Pretas + 2 Mesas Auxiliares"},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"})}),label:"Chuveirão e Ventilador"},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})}),label:"Banheiros Masculino e Feminino"},{icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v18m-4-4l4 4 4-4M6 12a6 6 0 0112 0"})}),label:"Guarda-Sol"}],t=[{name:"Noeli Alessandra",text:"Ótimo espaço, ambiente familiar. Super indico!"},{name:"Enzo Henrique",text:"Atendimento muito bom, tudo novinho, piscina linda iluminada."},{name:"Catia Cilene",text:"Espaço bem equipado, limpinho e proprietários super gentis."}],l=[{question:"O que está incluso?",answer:"Estrutura completa com piscina iluminada com cascata, churrasqueira, fogão cooktop, geladeira duplex, bombona de gelo e isopor grande, 6 jogos de mesas pretas + 2 mesas auxiliares, chuveirão, ventilador, guarda-sol, Wi-Fi liberado e banheiros masculino e feminino."},{question:"Como reservar?",answer:"Para garantir a sua data, é necessário um sinal de R$ 100,00. Entre em contato pelo WhatsApp para verificar disponibilidade e efetuar a reserva."},{question:"Posso levar som?",answer:"Som ambiente é permitido, desde que respeite a vizinhança. Pedimos bom senso com o volume para manter a harmonia do local."}],[o,d]=i.useState(null),c=[{url:"/ohana-1.jpg",alt:"Espaço Ohana - Vista 1",className:"gallery-tall"},{url:"/ohana-2.jpg",alt:"Espaço Ohana - Vista 2",className:""},{url:"/ohana-3.jpg",alt:"Espaço Ohana - Vista 3",className:""},{url:"/ohana-4.jpg",alt:"Espaço Ohana - Vista 4",className:"gallery-wide"},{url:"/ohana-5.jpg",alt:"Espaço Ohana - Vista 5",className:""},{url:"/ohana-6.jpg",alt:"Espaço Ohana - Vista 6",className:""},{url:"/ohana-8.jpg",alt:"Espaço Ohana - Vista 7",className:""}],m=()=>e.jsx("div",{style:{display:"flex",gap:"2px"},children:[...Array(5)].map((a,r)=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#FFD700",children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})},r))});return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        body {
          background: #0a0a0a;
          color: #f5f5f5;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .serif { font-family: 'Playfair Display', serif; }

        /* Fade-in animation */
        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Glass card */
        .glass {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
        }

        /* Hero */
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem 1.25rem;
          background-image: url('/ohana-hero.jpg');
          background-size: cover;
          background-position: center;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
        }
        .hero-content { position: relative; z-index: 1; max-width: 700px; }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
          color: #f5f5f5;
        }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          font-weight: 300;
          color: rgba(245,245,245,0.85);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .btn-cta {
          display: inline-block;
          background: #f5f5f5;
          color: #0a0a0a;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          padding: 14px 32px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.3s, transform 0.2s;
        }
        .btn-cta:hover { background: #d4d4d4; transform: translateY(-2px); }

        /* Sections */
        section { padding: 5rem 1.25rem; max-width: 1100px; margin: 0 auto; }

        .section-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          margin-bottom: 2.5rem;
          line-height: 1.2;
        }

        /* Info cards grid */
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media(min-width: 640px) {
          .cards-grid { grid-template-columns: 1fr 1fr; }
        }

        .info-card { padding: 1.75rem; }

        .info-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #e5e7eb;
        }

        .info-card ul { list-style: none; }
        .info-card ul li {
          padding: 0.4rem 0;
          font-size: 0.9rem;
          color: rgba(245,245,245,0.8);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: space-between;
        }
        .info-card ul li:last-child { border-bottom: none; }

        .warning {
          margin-top: 1rem;
          font-size: 0.8rem;
          color: #fbbf24;
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }

        /* Amenities */
        .amenities-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media(min-width: 768px) {
          .amenities-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media(min-width: 1024px) {
          .amenities-grid { grid-template-columns: repeat(5, 1fr); }
        }

        .amenity-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.6rem;
          padding: 1.25rem 0.75rem;
        }
        .amenity-item span {
          font-size: 0.8rem;
          color: rgba(245,245,245,0.75);
          line-height: 1.4;
        }

        /* Gallery */
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          gap: 0.75rem;
        }
        @media(min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 220px 220px 220px;
          }
          .gallery-tall { grid-row: span 2; }
          .gallery-wide { grid-column: span 2; }
        }

        .gallery-item {
          overflow: hidden;
          border-radius: 12px;
          aspect-ratio: 4/3;
        }
        @media(min-width: 768px) {
          .gallery-item { aspect-ratio: unset; height: 100%; }
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img { transform: scale(1.06); }

        /* Reviews */
        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media(min-width: 640px) {
          .reviews-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .review-card { padding: 1.75rem; }
        .review-card .stars { margin-bottom: 1rem; }
        .review-card p {
          font-size: 0.9rem;
          color: rgba(245,245,245,0.8);
          line-height: 1.65;
          margin-bottom: 1rem;
          font-style: italic;
        }
        .review-card .author {
          font-size: 0.8rem;
          font-weight: 600;
          color: #d1d5db;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* Footer */
        footer {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 3rem 1.25rem;
          text-align: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .footer-sub {
          font-size: 0.85rem;
          color: rgba(245,245,245,0.55);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          padding: 10px 22px;
          font-size: 0.82rem;
          font-weight: 500;
          color: #f5f5f5;
          text-decoration: none;
          transition: border-color 0.3s, background 0.3s;
        }
        .btn-outline:hover {
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.05);
        }

        .footer-copy {
          font-size: 0.75rem;
          color: rgba(245,245,245,0.3);
          margin-top: 2rem;
        }

        /* WhatsApp float */
        .float-buttons {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        @media(max-width: 768px) {
          .float-buttons {
            bottom: 0;
            right: 0;
            left: 0;
            flex-direction: row;
            justify-content: flex-end;
            gap: 10px;
            padding: 12px 16px;
            background: rgba(10,10,10,0.92);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-top: 1px solid rgba(255,255,255,0.08);
          }
        }
        .wa-float {
          width: 56px;
          height: 56px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
          text-decoration: none;
          animation: pulse-wa 2.5s infinite;
        }
        .map-float {
          width: 46px;
          height: 46px;
          background: #2a2a2a;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4);
          text-decoration: none;
          transition: background 0.3s;
        }
        .map-float:hover { background: #3a3a3a; }
        @keyframes pulse-wa {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          50% { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
        }

        /* FAQ Accordion */
        .faq-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .faq-item { border-radius: 16px; overflow: hidden; }
        .faq-question {
          width: 100%;
          background: transparent;
          border: none;
          color: #e5e7eb;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          text-align: left;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          transition: color 0.2s;
        }
        .faq-question:hover { color: #fff; }
        .faq-chevron {
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .faq-item.open .faq-chevron { transform: rotate(180deg); }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
          padding: 0 1.5rem;
        }
        .faq-item.open .faq-answer {
          max-height: 300px;
          padding: 0 1.5rem 1.25rem;
        }
        .faq-answer p {
          font-size: 0.9rem;
          color: rgba(245,245,245,0.75);
          line-height: 1.7;
        }

        /* Footer disclaimer */
        .footer-disclaimer {
          font-size: 0.7rem;
          color: rgba(245,245,245,0.35);
          margin-top: 1.25rem;
          line-height: 1.5;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Divider */
        .divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 0 auto;
        }
      `}),e.jsx("div",{className:"hero",children:e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"badge",children:[e.jsx("span",{children:"⭐⭐⭐⭐⭐"}),e.jsx("span",{children:"4.9/5 de satisfação no Google"})]}),e.jsxs("h1",{className:"serif",children:["Espaço Ohana:",e.jsx("br",{}),"Onde a família se encontra"]}),e.jsxs("p",{children:["Ambiente familiar exclusivo em Inhoaíba.",e.jsx("br",{}),"Estrutura impecável para 12 horas de lazer total."]}),e.jsx("a",{href:"https://wa.me/5521991064442",target:"_blank",rel:"noopener noreferrer",className:"btn-cta",children:"CONSULTAR DISPONIBILIDADE"})]})}),e.jsxs("section",{className:"fade-in",children:[e.jsx("p",{className:"section-label",children:"Tarifas & Funcionamento"}),e.jsx("h2",{className:"section-title serif",children:"Informações e Regras"}),e.jsxs("div",{className:"cards-grid",children:[e.jsxs("div",{className:"glass info-card",children:[e.jsx("h3",{children:"Preços por Período"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{children:"Segunda a Quinta"}),e.jsx("span",{style:{color:"#e5e7eb",fontWeight:600},children:"R$ 280 – R$ 300"})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Sexta-Feira"}),e.jsx("span",{style:{color:"#e5e7eb",fontWeight:600},children:"R$ 400"})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Domingo e Feriados"}),e.jsx("span",{style:{color:"#e5e7eb",fontWeight:600},children:"R$ 400"})]})]})]}),e.jsxs("div",{className:"glass info-card",children:[e.jsx("h3",{children:"Como Funciona"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{children:"Período fixo"}),e.jsx("span",{children:"10h às 22h (12h)"})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Sinal para reserva"}),e.jsx("span",{children:"R$ 100,00"})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Hora extra"}),e.jsx("span",{children:"R$ 40,00"})]})]}),e.jsxs("p",{className:"warning",children:[e.jsx("span",{children:"⚠️"}),e.jsx("span",{children:"Não realizamos aluguel para madrugada ou pernoite."})]})]})]})]}),e.jsx("div",{className:"divider"}),e.jsxs("section",{className:"fade-in",children:[e.jsx("p",{className:"section-label",children:"Estrutura Completa"}),e.jsx("h2",{className:"section-title serif",children:"O Que Oferecemos"}),e.jsx("div",{className:"amenities-grid",children:n.map((a,r)=>e.jsxs("div",{className:"glass amenity-item fade-in",children:[a.icon,e.jsx("span",{children:a.label})]},r))})]}),e.jsx("div",{className:"divider"}),e.jsxs("section",{className:"fade-in",children:[e.jsx("p",{className:"section-label",children:"Nosso Espaço"}),e.jsx("h2",{className:"section-title serif",children:"Galeria de Fotos"}),e.jsx("div",{className:"gallery-grid",children:c.map((a,r)=>e.jsx("div",{className:`gallery-item ${a.className}`,children:e.jsx("img",{src:a.url,alt:a.alt,loading:"lazy"})},r))})]}),e.jsx("div",{className:"divider"}),e.jsxs("section",{className:"fade-in",children:[e.jsx("p",{className:"section-label",children:"Depoimentos"}),e.jsx("h2",{className:"section-title serif",children:"O Que Dizem Nossos Clientes"}),e.jsx("div",{className:"reviews-grid",children:t.map((a,r)=>e.jsxs("div",{className:"glass review-card fade-in",children:[e.jsx("div",{className:"stars",children:e.jsx(m,{})}),e.jsxs("p",{children:['"',a.text,'"']}),e.jsxs("span",{className:"author",children:["— ",a.name]})]},r))})]}),e.jsx("div",{className:"divider"}),e.jsxs("section",{className:"fade-in",children:[e.jsx("p",{className:"section-label",children:"Tire Suas Dúvidas"}),e.jsx("h2",{className:"section-title serif",children:"Dúvidas Frequentes"}),e.jsx("div",{className:"faq-list",children:l.map((a,r)=>e.jsxs("div",{className:`glass faq-item${o===r?" open":""}`,children:[e.jsxs("button",{className:"faq-question",onClick:()=>d(o===r?null:r),children:[a.question,e.jsx("svg",{className:"faq-chevron",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})]}),e.jsx("div",{className:"faq-answer",children:e.jsx("p",{children:a.answer})})]},r))})]}),e.jsx("div",{className:"divider"}),e.jsxs("footer",{className:"fade-in",children:[e.jsx("h2",{className:"footer-title serif",children:"Espaço Ohana"}),e.jsxs("p",{className:"footer-sub",children:["Rua Dicurana, Vilar Carioca – Inhoaíba",e.jsx("br",{}),"(Atrás do Sítio Renascer)"]}),e.jsxs("div",{className:"footer-links",children:[e.jsxs("a",{href:"https://www.google.com/maps/place/Espa%C3%A7o+Ohana/@-22.9184014,-43.597735,15z/data=!4m16!1m9!3m8!1s0x9be500101cb7ab:0xbbe15e302b8aaa!2sEspa%C3%A7o+Ohana!8m2!3d-22.9184014!4d-43.597735!9m1!1b1!16s%2Fg%2F11lcn0l4rz!3m5!1s0x9be500101cb7ab:0xbbe15e302b8aaa!8m2!3d-22.9184014!4d-43.597735!16s%2Fg%2F11lcn0l4rz?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",className:"btn-outline",children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Abrir no Google Maps"]}),e.jsxs("a",{href:"https://instagram.com/espco_ohana",target:"_blank",rel:"noopener noreferrer",className:"btn-outline",children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),e.jsx("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"}),e.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),"@espco_ohana"]}),e.jsxs("a",{href:"https://wa.me/5521991064442",target:"_blank",rel:"noopener noreferrer",className:"btn-outline",style:{borderColor:"rgba(37,211,102,0.4)",color:"#25D366"},children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp"]})]}),e.jsxs("p",{className:"footer-copy",children:["© ",new Date().getFullYear()," Espaço Ohana. Todos os direitos reservados."]}),e.jsx("p",{className:"footer-disclaimer",children:"Imagens com decoração são meramente ilustrativas. O aluguel refere-se à estrutura física do espaço."})]}),e.jsxs("div",{className:"float-buttons",children:[e.jsx("a",{href:"https://www.google.com/maps/place/Espa%C3%A7o+Ohana/@-22.9184014,-43.597735,15z/data=!4m16!1m9!3m8!1s0x9be500101cb7ab:0xbbe15e302b8aaa!2sEspa%C3%A7o+Ohana!8m2!3d-22.9184014!4d-43.597735!9m1!1b1!16s%2Fg%2F11lcn0l4rz!3m5!1s0x9be500101cb7ab:0xbbe15e302b8aaa!8m2!3d-22.9184014!4d-43.597735!16s%2Fg%2F11lcn0l4rz?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",className:"map-float","aria-label":"Abrir no Google Maps",children:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A84C",strokeWidth:"2",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsx("a",{href:"https://wa.me/5521991064442",target:"_blank",rel:"noopener noreferrer",className:"wa-float","aria-label":"Fale conosco no WhatsApp",children:e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"white",children:e.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})})]})]})}export{p as component};
