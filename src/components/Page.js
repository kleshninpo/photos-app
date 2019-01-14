import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Page extends Component {

  onBtnClick = e => {
    const year = +e.currentTarget.value;
    this.props.getPhotos(year);
  };

  renderTemplate = () => {
    const { year, photos, isFetching, error } = this.props;

    if (error) {
      return <p className='error'>Не удалось загрузить фото. Обновите страницу.</p>;
    }

    if (isFetching) {
      return <p className='loading'>Загрузка...</p>;
    } else if (!this.props.name) {
      return <p>Для начала авторизуйтесь</p>;
    } else if (this.props.name && !photos.length && !this.props.yearsArr.length) {
      return <p>Теперь нажмите на кнопку</p>;
    } else {
      return <div className="photos-container">
        <h2>{year} год.</h2>
        <p>У вас {photos.length} фото. Вот самые популярные из них:</p>
        <div className='photos'>
          {
            photos.map((item, i) => {
              if (i < 6) {
                const image = item.sizes[2];
                const style = {
                  background: `url(${image.url}) center center no-repeat`,
                  backgroundSize: 'cover',
                };
                return <div key={item.id} className='photos__photo-block'>
                  <div className='photos__photo-block__photo' style={style}>

                  </div>
                  <p>{item.likes.count} ❤</p>
                </div>;
              }
            })
          }
        </div>
      </div>;
    }
  };

  render () {
    return (
      <div className='page'>
        <div className='buttons-wrapper'>
          {
            this.props.yearsArr.length
              ? this.props.yearsArr.map((item, i) =>
                <button key={i} className='btn' onClick={this.onBtnClick} value={item}>
                  {item}
                </button>)
              : <div className='buttons-wrapper'>
                <button className="btn" onClick={this.onBtnClick}
                        value={new Date().getFullYear()}
                        disabled={this.props.name ? '' : 'disable'}>
                  Нажми, чтобы начать
                </button>
              </div>
          }
        </div>

        <div className='info'>
          {this.renderTemplate()}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  yearsArr: PropTypes.array.isRequired,
  photos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getPhotos: PropTypes.func.isRequired,
};
