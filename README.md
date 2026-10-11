# KONBIT31 Frontend (Next.js 15)

Klyan k ap pale ak backend NestJS la (`konbit31-backend`).

## Enstalasyon

```bash
npm install
cp .env.local.example .env.local
# Mete URL backend la (default http://localhost:3000)
npm run dev
```

## Paj ki egziste

| Wout | Deskripsyon |
|---|---|
| `/` | Paj akèy — eksplike kijan pou antre (via yon lyen) |
| `/ref/[code]` | Fòm enskripsyon — moun nan rive isit atravè yon lyen referans (pèmanan oswa tanporè) |
| `/account/[memberId]` | Estati kont apre enskripsyon: mesaj "kontakte nou" si `Pending`, plan fikse si li antre pa yon parrain, oswa `PlanSelector` (8 bouton) si li antre pa yon lyen Pèmanan epi deja validé |
| `/login` | Konekte kòm youn nan 6 Principal yo |
| `/dashboard` | (Pwoteje pa JWT nan `localStorage`) Validè yon enskripsyon, kreye yon lòt Principal, chanje modpas |

## Kijan li konekte ak backend la

Tout apèl yo pase pa `lib/api.ts`, ki li `NEXT_PUBLIC_API_BASE_URL` nan
`.env.local`. Token JWT Principal la sere nan `localStorage`
(`lib/session.ts`) — senp pou yon premye vèsyon; pou pwodiksyon, konsidere
yon cookie `httpOnly` olye de `localStorage` (pi sekirize kont XSS).

## Sa ki pa fèt ankò

- Paj admin pou wè tout manm/tables/notifikasyon yo (kounye a se sèl
  aksyon dirèk — validè yon ID, kreye Principal — san lis/rechèch)
- Paj "modpas bliye" (backend `password reset` poko egziste)
- Design system konplè / animasyon Framer Motion / grafik Recharts
  (mansyone nan spec orijinal la, poko entegre)
- Tès (Jest/Playwright)
