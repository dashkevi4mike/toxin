import React from 'react';
import block from 'bem-cn';

import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';

import './Pagination.scss';

const b = block('pagination');

type Props = {
  onChange: (page: number) => void;
  currentPage: number;
  total: number;
  perPage: number;
}

const visibleButtonsCount = 3;

class Pagination extends React.Component<Props> {

  render() {
    const { currentPage } = this.props;
    return (
      <div className={b()}>
        <div className={b('buttons')}>
          {
            this.shouldShowPreviousButton() 
              && <button type="button" className={b('nav-button')} onClick={() => this.handleClick(currentPage - 1)}>
              <ArrowBack />
            </button>
          }
          { this.shouldShowDots('before') ? this.renderDots() : null }
          {
            Array(3, 1, 4).map((_, index) => {
              const firstButtonNumber = this.getFirstButtonNumber();
              const pageNumber = firstButtonNumber + index;
              return this.shouldShowButton(firstButtonNumber, index) ? null :
                <button 
                  className={b('page', {
                    current: this.isCurrentPageButton(index),
                  })}
                  key={pageNumber}
                  onClick={() => { this.handleClick(pageNumber) }}
                >
                  {pageNumber}
                </button>
            })
          }
          { this.shouldShowDots('after') ? this.renderDots() : null }
          {
            this.shouldShowNextButton() 
              && <button type="button" className={b('nav-button')} onClick={() => this.handleClick(currentPage + 1)}>
              <ArrowForward />
            </button>
          }
        </div>
      </div>   
    );
  }

  private handleClick(page: number) {
    this.props.onChange(page);
  }

  private moreOrEqualLastPage(page: number) {
    return this.getTotalPages() <= page;
  }

  private moreLastPage(page: number) {
    return this.getTotalPages() < page;
  }

  private isCurrentPageButton(buttonIndex: number) {
    const { currentPage } = this.props;
    return (currentPage !== 1 && buttonIndex === 1 && currentPage !== this.getTotalPages())  // if button of current page in middle
      || (currentPage === 1 && buttonIndex === 0) // if current page is first
      || (currentPage === this.getTotalPages() && buttonIndex === 2); // if current page is last
  }

  private getFirstButtonNumber() {
    const { currentPage } = this.props;
    let value = currentPage + 2 > this.getTotalPages() ? (this.getTotalPages() - 2) : currentPage - 1;
    value = currentPage === 1 ? 1 : value;
    return value;
  }

  private shouldShowPreviousButton() {
    const { currentPage } = this.props;
    return !this.lessOrEqualFirstPage(currentPage);
  }

  private shouldShowButton(firstButtonNumber: number, buttonIndex: number) {
    return (this.lessFirstPage(firstButtonNumber + buttonIndex) || this.moreLastPage(firstButtonNumber + buttonIndex))
  }

  private shouldShowNextButton() {
    const { currentPage } = this.props;
    return !this.moreOrEqualLastPage(currentPage);
  }

  private shouldShowDots(place: 'before' | 'after') {
    const { currentPage } = this.props;
    return (place === 'after' && currentPage < (this.getTotalPages() - visibleButtonsCount)) // last dots
      || (place === 'before' && currentPage > visibleButtonsCount); // first dots
  }



  private getTotalPages() {
    const { total, perPage } = this.props;
    return Math.ceil(total/perPage);
  }

  private lessFirstPage(page: number) {
    return page < 1;
  }

  private lessOrEqualFirstPage(page: number) {
    return page <= 1;
  }

  private renderDots() {
    return <div className={b('dots')}>...</div>
  }
}

export { Pagination, Props };
      