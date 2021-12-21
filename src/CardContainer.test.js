import { fireEvent, render, screen } from "@testing-library/react";
import CardContainer from "./components/CardContainer";
import React from 'react';

test('Should Card container contains Docker Id text', () => {
    const props = {
        containerData: {
            containerId: '12',
            image: '12',
            name: 'dummy',
        }
    };

    render(<CardContainer {...props} />);
    expect(screen.getByText('Docker Id')).toBeInTheDocument()
});

test('Should Card container contains Name text', () => {
    const props = {
        containerData: {
            containerId: '12',
            image: '12',
            name: 'dummy',
        }
    };

    render(<CardContainer {...props} />);
    expect(screen.getByText('Name')).toBeInTheDocument()
});

test('Should Card container contains Image text', () => {
    const props = {
        containerData: {
            containerId: '12',
            image: '12',
            name: 'dummy',
        }
    };

    render(<CardContainer {...props} />);
    expect(screen.getByText('Image')).toBeInTheDocument();
});

test('Should call firstBtn props when clicked', () => {
    const handleFirstBtnClick = jest.fn();
    const props = {
        containerData: {
            containerId: '12',
            image: '12',
            name: 'dummy',
        },
        firstBtn: {
            callBack: handleFirstBtnClick,
            name: 'Start',
        }
    };

    render(<CardContainer {...props}  />);
    fireEvent.click(screen.getByText('Start'));

    expect(handleFirstBtnClick).toHaveBeenCalledWith('12');
});

test('Should call secondBtn props when clicked', () => {
    const handleSecondBtnClick = jest.fn();
    const props = {
        containerData: {
            containerId: '14',
            image: 'img2',
            name: 'dummy23',
        },
        secondBtn: {
            callBack: handleSecondBtnClick,
            name: 'Delete',
        }
    };

    render(<CardContainer {...props}  />);
    fireEvent.click(screen.getByText('Delete'));

    expect(handleSecondBtnClick).toHaveBeenCalledWith('14');
});
