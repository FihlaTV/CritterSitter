import Backbone from 'backbone';


const MessageModel = Backbone.Model.extend({
	defaults: {
		recipientId: '',
		senderId: '',
		messageBody: '',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	urlRoot: '/api/v1/Message',
	idAttribute: 'id'

});

export default MessageModel;