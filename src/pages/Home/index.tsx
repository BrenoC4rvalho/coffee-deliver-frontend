import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"

import hero from '../../../public/images/hero.svg'
import heroBg from '../../../public/images/hero-bg.svg'

import { useTheme } from "styled-components"
import { CofeeList, Heading, Hero, HeroContent, Info } from "./styles"
import { Card } from "../../components/Card"

import { coffees }from "../../../data.json"

export function Home() {
    const theme = useTheme()

    return(
        <div>
            <Hero>
                <HeroContent>
                    <div>
                        <Heading>
                            <h1>Find the perfect coffee for any time of day</h1>
                            <span>
                                With Coffee Delivery you receive your coffee wherever you are,
                                any time
                            </span>
                        </Heading>
                        <Info>
                            <div>
                                <ShoppingCart
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors['yellow-dark'] }}
                                />
                                <span>Simple and secure purchase</span>
                            </div>
                            <div>
                                <Package
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors['base-text'] }}
                                />
                                <span>Packaging keeps the coffee intact</span>
                            </div>
                            <div>
                                <Timer
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors.yellow }}
                                />
                                <span>Fast and tracked delivery</span>
                            </div>
                            <div>
                                <Coffee
                                    size={32}
                                    weight="fill"
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors.purple }}
                                />
                                <span>The coffee arrives fresh to you</span>
                            </div>
                        </Info>
                    </div>

                    <img src={hero} alt="Coffee Delivery Cafe" />
                </HeroContent>

                    <img src={heroBg} id="hero-bg" />
            
            </Hero>
            <CofeeList>
                <h2>Our cafes</h2>
                <div>
                    {coffees.map((coffee) => (
                        <Card key={coffee.id} coffee={coffee} />
                    ))}   
                </div>
            </CofeeList>        
        </div>
    )
}