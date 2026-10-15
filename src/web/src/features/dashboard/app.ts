
import type { AppItem } from './type'

export const apps: AppItem[] = [
    { name: 'Dellen', description: "Recherche de localisation", color: "#007AFF", route: "/apps/dellen", icon:"/icons/pin.svg", statut: "available"},
    { name: 'Tresan', description: "Editeur de cartes", color: "#FF9500", route: "", icon:"/icons/map.svg", statut: "available"},
    { name: 'Gwrizienn', description: "Definition de variable d'environnements", color: "#34C759", route: "", icon:"/icons/gift_card.svg", statut: "available"},
    { name: 'Orkestrour', description: "Gestion de taches ordinateur", color: "#007AFF", route: "", icon:"/icons/check.svg", statut: "available"},
    { name: 'Bleun', description: "Liste gens", color: "#6f42c1", route: "", icon:"/icons/people.svg", statut: "available"},
    { name: 'Keoad', description: "Liste odinateurs", color: "#FF2D55", route: "", icon:"/icons/laptop.svg", statut: "available"},
    { name: 'Plantan', description: "Assignation de gens et de materiel", color: "", route: "", icon:"/icons/people.svg", statut: "soon"},
    { name: 'Kendon', description: "Définiion d'affinité", color: "", route: "", icon:"/icons/heart.svg", statut: "soon"},
    { name: 'Liorzh', description: "Jardin: Gestion de communauté", color: "", route: "", icon:"/icons/check.svg", statut: "soon"},
    { name: 'Klevout', description: "Gestion de tickets IT", color: "", route: "", icon:"/icons/information.svg", statut: "soon"},
    { name: 'Gevred', description: "Gestion de composants informatiques", color: "", route: "", icon:"/icons/wrench.svg", statut: "soon"},
    { name: 'Karrigell', description: "Ferme de rendu", color: "", route: "", icon:"/icons/laptop.svg", statut: "soon"},
]