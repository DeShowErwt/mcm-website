import type HomeModel from "../lib/models/HomeModel";

export default class HomeService {
    public static getHouses() : HomeModel[] {
        return [
            {
                name: "Mi Casa",
                imageUrl: "/placeholder.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies",
                bookedBefore: 16
            },
            {
                name: "Casa di dos",
                imageUrl: "/placeholder.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies",
                bookedBefore: 0
            },
            {
                name: "Moments Casa",
                imageUrl: "/placeholder.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies",
                bookedBefore: 1
            },
            {
                name: "Heerhugowaard",
                imageUrl: "/placeholder.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies",
                bookedBefore: 2
            },
        ]
    }
}