"use client";
import { BackIcon } from "@/icons/return-icon";
import { useRouter } from "next/navigation"; // Import from next/navigation
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    border: none;
    background: transparent;
    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--secundary-text);
`;

interface BtnProps {
    navigate: string;
}

export function BackButton({ navigate }: BtnProps) {
    const router = useRouter()

    const handleNavigate = () => {
        router.push(navigate);
    };

    return (
        <Button onClick={handleNavigate}>
            <BackIcon />
            voltar
        </Button>
    );
}
