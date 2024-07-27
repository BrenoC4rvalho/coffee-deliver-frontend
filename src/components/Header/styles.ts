import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.header`
    max-width: 1160px;
    padding: 32px 20px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Aside = styled.aside`
    display: flex;
    gap: 12px;

    div {
        display: flex;
        align-items: center;
        gap: 4px;

        padding: 10px 8px;
        border-radius: 6px;

        background: ${({ theme }) => theme.colors['purple-light']};

        svg {
            color: ${({ theme }) => theme.colors['purple']};
        }

        span {
            color: ${({ theme }) => theme.colors['purple-dark']};
        }

    }

    a {
        display: flex;
        align-items: center;

        padding: 8px;
        border-radius: 6px;

        position: relative;

        background: ${({ theme }) => theme.colors['yellow-light']};
        color: ${({ theme }) => theme.colors['yellow-dark']};
    
        &[aria-disabled='true'] {
            pointer-events: none;
        }

        span {
            ${mixins.fonts.textS};
            font-weight: bold;
            color: ${({ theme }) => theme.colors.white};
            background-color: ${({ theme }) => theme.colors['yellow-dark']};
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: 0px;
            right: 0px;
            transform: translate(50%, -50%);
        }
        
    }
`

