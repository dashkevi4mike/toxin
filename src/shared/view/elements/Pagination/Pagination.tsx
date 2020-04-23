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

class Pagination extends React.Component<Props> {

  render() {
    const { currentPage, total } = this.props;
    return (
      <div className={b()}>
        <div className={b('buttons')}>
          {
            !this.lessOrEqualFirstPage(currentPage) 
              && <button type="button" className={b('nav-button')} onClick={() => this.handleClick(currentPage - 1)}>
              <ArrowBack />
            </button>
          }
          { currentPage > 3 ? this.renderDots() : null } {/* because 3 buttons */}
          {
            [0,1,2].map((_, index) => {
              let value = currentPage + 2 > this.getTotalPages() ? (this.getTotalPages() - 2) : currentPage - 1;
              value = currentPage === 1 ? 1 : value;
              // value - number of the first button
              return (this.lessFirstPage(value + index) || this.moreLastPage(value + index)) ? null :
                <button 
                  className={b('page', {
                    current: (currentPage !== 1 && index === 1 && currentPage !== this.getTotalPages()) || (currentPage === 1 && index === 0) || (currentPage === this.getTotalPages() && index === 2)
                  })}
                  key={value + index}
                  onClick={() => { this.handleClick(value + 1) }}
                >
                  {value + index}
                </button>
            })
          }
          { currentPage < (this.getTotalPages() - 3) ? this.renderDots() : null } {/* because 3 buttons */}
          {
            !this.moreOrEqualLastPage(currentPage) 
              && <button type="button" className={b('nav-button')} onClick={() => this.handleClick(currentPage + 1)}>
              <ArrowForward />
            </button>
          }
        </div>
        <p className={b('total')}>{total} вариантов аренды</p>
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
      