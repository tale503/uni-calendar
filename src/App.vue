<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  view {
    font-size: 26rpx;
    color: #333333;
  }
  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
  .flex-column {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flex-item {
    flex: 1;
  }
  .border-btm {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ellipsis-one {
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ellipsis-one-left {
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    direction: rtl;
    text-align: left;
  }
  .ellipsis {
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .button {
    width: 600rpx;
    height: 80rpx;
    background: #229fff;
    color: #ffffff;
    font-size: 32rpx;
    margin: 30rpx auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border-radius: 12rpx;
    &.disable {
      background: #ECECEC;
      color: #666666;
      pointer-events: none;
    }
    &.delete {
      border: 1px solid $active-color;
      color: $active-color;
      background: none;
    }
  }
  .shadow {
    box-shadow: -2px 4px 24px 0 rgba(31, 31, 31, 0.1);
  }
  .cover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 3;
  }
  .empty {
    padding: 160rpx 0 0;
    text-align: center;
    font-size: 26rpx;
    color: #666666;
    img {
      width: 330rpx;
      height: auto;
      margin-bottom: 40rpx;
    }
  }
</style>
